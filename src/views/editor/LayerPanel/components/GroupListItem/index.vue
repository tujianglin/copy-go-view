<script lang="tsx">
  import { PropType, computed, defineComponent, ref } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { LayerModeEnum } from '/@/store/types';
  import { MenuEnum, MouseEventButton } from '/@/enums/editPageEnum';
  import { useEditStore } from '/@/store/modules/edit';
  import { MenuOptionsItemType, divider, useContextMenu } from '../../../ContextMenu/useContextMenu';
  import Status from '../Status/index.vue';
  import ListItem from '../ListItem/index.vue';

  export default defineComponent({
    props: {
      componentGroupData: {
        type: Object as PropType<CreateComponentGroupType>,
        required: true,
      },
      layerMode: {
        type: String as PropType<LayerModeEnum>,
        default: LayerModeEnum.THUMBNAIL,
      },
    },
    setup(props) {
      // 全局颜色
      const editStore = useEditStore();
      const { handleContextMenu, onClickOutSide } = useContextMenu();
      const expend = ref(false);

      // 计算当前选中目标
      const select = computed(() => {
        const id = props.componentGroupData.id;
        return editStore.state.targetChart.selectId.find((e: string) => e === id);
      });

      // 悬浮
      const hover = computed(() => {
        return props.componentGroupData.id === editStore.state.targetChart.hoverId;
      });

      // 组件状态 隐藏/锁定
      const status = computed(() => {
        return props.componentGroupData.status;
      });

      // 右键
      const optionsHandle = (targetList: MenuOptionsItemType[], allList: MenuOptionsItemType[], targetInstance: CreateComponentType) => {
        const filter = (menulist: MenuEnum[]) => {
          return allList.filter((i) => menulist.includes(i.key as MenuEnum));
        };

        // 多选处理
        if (editStore.state.targetChart.selectId.length > 1) {
          return filter([MenuEnum.GROUP]);
        } else {
          const statusMenuEnums: MenuEnum[] = [];
          if (targetInstance.status.lock) {
            statusMenuEnums.push(MenuEnum.LOCK);
          } else {
            statusMenuEnums.push(MenuEnum.UNLOCK);
          }
          if (targetInstance.status.hide) {
            statusMenuEnums.push(MenuEnum.HIDE);
          } else {
            statusMenuEnums.push(MenuEnum.SHOW);
          }
          return [...filter([MenuEnum.UN_GROUP]), divider(), ...targetList.filter((i) => !statusMenuEnums.includes(i.key as MenuEnum))];
        }
      };

      // 点击
      const clickHandle = (e: MouseEvent) => {
        // 按下左键 + CTRL
        if (window.$KeyboardActive?.ctrl) return;
        // 判断左右键
        expend.value = !expend.value;
        mousedownHandle(e, props.componentGroupData);
      };

      // 组点击事件
      const onMousedown = (e: MouseEvent) => {
        onClickOutSide();
        // 若此时按下了 CTRL, 表示多选
        const id = props.componentGroupData.id;
        if (e.buttons === MouseEventButton.LEFT && window.$KeyboardActive?.ctrl) {
          // 若已选中，则去除
          if (editStore.state.targetChart.selectId.includes(id)) {
            const exList = editStore.state.targetChart.selectId.filter((e) => e !== id);
            editStore.setTargetSelectChart(exList);
          } else {
            editStore.setTargetSelectChart(id, true);
          }
          return;
        }
        editStore.setTargetSelectChart(id);
      };

      // 公共点击事件
      const mousedownHandle = (e: MouseEvent, componentInstance: CreateComponentType | CreateComponentGroupType, id?: string) => {
        e.preventDefault();
        e.stopPropagation();

        onClickOutSide();
        editStore.setTargetSelectChart(id || componentInstance.id);
      };

      // 公共进入事件
      const onMouseenter = (componentInstance: CreateComponentType | CreateComponentGroupType) => {
        editStore.state.targetChart.hoverId = componentInstance.id;
      };

      // 公共移出事件
      const onMouseleave = () => {
        editStore.state.targetChart.hoverId = undefined;
      };
      return () => (
        <div class="w-90%">
          <div
            class="group mb-1 relative cursor-pointer"
            onClick={clickHandle}
            onMousedown={onMousedown}
            onMouseenter={() => onMouseenter(props.componentGroupData)}
            onMouseleave={onMouseleave}
            onContextmenu={(e) => handleContextMenu(e, props.componentGroupData, optionsHandle)}
          >
            <div class={['flex items-center justify-between p-1 mb-1 b-rd-1 bd-transparent group-hover:(bg-layout)', { '!bg-bg-hover !bd-primary': select.value }]}>
              <div class="flex-1 ml-1 text-3 text-ellipsis">{props.componentGroupData.chartConfig.title}</div>
              <Status isGroup={false} hover={hover.value} status={status.value}></Status>
            </div>
          </div>
          <div v-show={expend.value}>
            {props.componentGroupData.groupList.map((element) => (
              <ListItem key={element.id} componentData={element} isGroup onContextmenu={(e) => handleContextMenu(e, props.componentGroupData, optionsHandle)}></ListItem>
            ))}
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped></style>
