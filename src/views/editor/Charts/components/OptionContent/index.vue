<script lang="tsx">
  import { Layout, Menu } from 'ant-design-vue';
  import { PropType, defineComponent, reactive, ref, watch } from 'vue';
  import { useLayoutStore } from '/@/store/modules/layout';
  import { ConfigType } from '/@/packages/index.d';
  import { loadAsyncComponent } from '/@/utils/components';
  const ItemBox = loadAsyncComponent(() => import('../ItemBox/index.vue'));
  export default defineComponent({
    props: {
      selectOptions: {
        type: Object as PropType<{ list: ConfigType[] }>,
        default: () => {},
      },
    },
    setup(props) {
      const layoutStore = useLayoutStore();
      const selectValue = ref(['all']);
      const packages = reactive({
        // 侧边栏
        menuOptions: [],
        // 当前选择
        selectOptions: [],
        // 分类归档
        categorys: {
          all: [],
        },
        categoryNames: {
          all: '所有',
        },
        // 分类归档数量
        categorysNum: 0,
        // 存储不同类别组件进来的选中值
        saveSelectOptions: {},
      });

      watch(
        () => props.selectOptions,
        (val) => {
          packages.categorysNum = 0;
          if (!val) return;
          val.list.map((i) => {
            const value: ConfigType[] = (packages.categorys as any)[i.category];
            packages.categorys[i.category] = value && value.length ? [...value, i] : [i];
            packages.categoryNames[i.category] = i.categoryName;
            packages.categorys['all'].push(i);
          });
          for (const val in packages.categorys) {
            packages.categorysNum += 1;
            packages.menuOptions.push({
              key: val,
              label: packages.categoryNames[val],
            });
          }
          setSelectOptions(packages.categorys);
          // 默认选中处理
          selectValue.value = [packages.menuOptions[0]['key']];
        },
        {
          immediate: true,
        },
      );

      // 设置初始列表
      function setSelectOptions(categorys: any) {
        for (const val in categorys) {
          packages.selectOptions = categorys[val];
          break;
        }
      }

      // 处理点击事件
      const clickItemHandle = ({ key }) => {
        packages.selectOptions = packages.categorys[key];
      };
      return () => (
        <>
          <Layout.Sider class="content-sider h-full overflow-y-auto !bg-elevated" width={60} collapsedWidth={0} collapsed={!layoutStore.state.charts}>
            <Menu v-model:selectedKeys={selectValue.value} class="h-full" items={packages.menuOptions} onClick={clickItemHandle}></Menu>
          </Layout.Sider>
          <Layout.Sider class="h-full overflow-y-auto !bg-elevated" width={200} collapsedWidth={0} collapsed={!layoutStore.state.charts}>
            <ItemBox menuOptions={packages.selectOptions}></ItemBox>
          </Layout.Sider>
        </>
      );
    },
  });
</script>
<style lang="less" scoped>
  .content-sider {
    :deep(.ant-menu-item) {
      display: flex;
      flex-direction: column;
      height: auto;
      padding-inline: 0;

      &-icon {
        line-height: 0;
        padding-top: 10px;
      }

      .ant-menu-title-content {
        opacity: 1;
        margin-inline-start: 0;
        text-align: center;
      }
      span {
        display: block;
      }
    }
  }
</style>
