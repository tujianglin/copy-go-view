<script lang="tsx">
  import { PropType, computed, defineComponent } from 'vue';
  import { CreateComponentGroupType, CreateComponentType } from '/@/packages/types';
  import { useEditStore } from '/@/store/modules/edit';
  import { usePointStyle, useSizeStyle } from '../../hooks/useStyle';
  import { useMousePointHandle } from '../../hooks';
  export default defineComponent({
    props: {
      item: {
        type: Object as PropType<CreateComponentType | CreateComponentGroupType>,
        required: true,
      },
      hiddenPoint: {
        type: Boolean,
        required: false,
      },
    },
    emits: ['click', 'mousedown', 'mouseenter', 'mouseleave', 'contextmenu'],
    setup(props, { slots, emit }) {
      // 锚点
      const pointList = ['t', 'r', 'b', 'l', 'lt', 'rt', 'lb', 'rb'];
      // 光标朝向
      const cursorResize = ['n', 'e', 's', 'w', 'nw', 'ne', 'sw', 'se'];
      const editStore = useEditStore();

      // 兼容多值场景
      const select = computed(() => {
        const id = props.item.id;
        if (props.item.status.lock) return false;
        return editStore.state.targetChart.selectId.find((e: string) => e === id);
      });
      // 计算当前选中目标
      const hover = computed(() => {
        const isDrag = editStore.state.editCanvas.isDrag;
        if (isDrag) return false;
        if (props.item.status.lock) return false;
        return props.item.id === editStore.state.targetChart.hoverId;
      });
      return () => (
        <div
          class={['shape-box', { lock: props.item.status.lock, hide: props.item.status.hide }]}
          onClick={(e) => emit('click', e)}
          onMousedown={(e) => emit('mousedown', e)}
          onMouseenter={(e) => emit('mouseenter', e)}
          onMouseleave={(e) => emit('mouseleave', e)}
          onContextmenu={(e) => emit('contextmenu', e)}
        >
          {slots?.default?.()}
          {!props.hiddenPoint ? (
            <>
              {(select.value ? pointList : []).map((v, i) => (
                <div key={i} class={['shape-point', v]} style={usePointStyle(v, i, props.item.attr, cursorResize)} onMousedown={(e) => useMousePointHandle(e, v, props.item.attr)}></div>
              ))}
            </>
          ) : (
            ''
          )}
          <div class="shape-modal" style={useSizeStyle(props.item.attr)}>
            <div class={['shape-modal-select', { active: select.value }]}></div>
            <div class={['shape-modal-change', { selectActive: select.value, hoverActive: hover.value }]}></div>
          </div>
        </div>
      );
    },
  });
</script>
<style lang="less" scoped>
  .shape-box {
    position: absolute;
    cursor: move;

    &.lock {
      cursor: default !important;
    }

    &.hide {
      display: none;
    }

    /* 锚点 */
    .shape-point {
      z-index: 1;
      position: absolute;
      width: 7px;
      height: 7px;
      border: 3px solid var(--color-primary);
      border-radius: 5px;
      background-color: #fff;
      transform: translate(-40%, -30%);
      &.t {
        width: 30px;
        transform: translate(-50%, -50%);
      }
      &.b {
        width: 30px;
        transform: translate(-50%, -30%);
      }
      &.l,
      &.r {
        height: 30px;
      }
      &.r {
        transform: translate(-20%, -50%);
      }
      &.l {
        transform: translate(-45%, -50%);
      }
      &.rt,
      &.rb {
        transform: translate(-30%, -30%);
      }
    }
    /* 选中 */
    .shape-modal {
      position: absolute;
      top: 0;
      left: 0;

      .shape-modal-select,
      .shape-modal-change {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }

      .shape-modal-select {
        opacity: 0.1;
        top: 2px;
        left: 2px;
        &.active {
          background-color: var(--color-primary);
        }
      }
      .shape-modal-change {
        border: 2px solid rgba(0, 0, 0, 0);
        &.selectActive,
        &.hoverActive {
          border-color: var(--color-primary);
          border-width: 2px;
        }
        &.hoverActive {
          border-style: dotted;
        }
        &.selectActive {
          border-style: solid;
        }
      }
    }
  }
</style>
