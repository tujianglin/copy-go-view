import { Api as System } from './modules/system_api';
import { Api as Cps } from './modules/cps_api';
import { Api as Auth } from './modules/authentication_api';
import { Api as Notify } from './modules/notify_api';
import { Api as Mdc } from './modules/mdc_api';
import { Api as Dnc } from './modules/dnc_api';
import { Api as Tpm } from './modules/tpm_api';
import { Api as Trace } from './modules/trace_api';
import { Api as Visual } from './modules/visual_api';
import { Api as Sync } from './modules/sync_api';
import { Api as Tool } from './modules/tool_api';
import { Api as Perf } from './modules/perf_api';
import { Api as DmpLog } from './modules/dmp-log_api';
import { Api as Fms } from './modules/fms_api';
import { Api as Coproduction } from './modules/coproduction_api';
import { Api as Andon } from './modules/andon_api';
import { Api as Lms } from './modules/lms_api';
export default {
  ...new Cps().bladeCps,
  ...new Mdc().bladeMdc,
  ...new Mdc().bladeCps,
  ...new Auth().bladeAuth,
  ...new Notify().bladeNotify,
  ...new System().bladeUser,
  ...new System().bladeSystem,
  ...new System().bladeResource,
  ...new Tpm().bladeTpm,
  ...new Dnc().bladeDnc,
  ...new Visual().bladeVisual,
  ...new Sync().bladeSync,
  ...new Tool().bladeTool,
  ...new Fms().bladeFms,
  ...new Coproduction().bladeCoproduction,
  ...new DmpLog().bladeDmpLog,
  ...new Andon().bladeAndon,
  ...new Trace().bladeTrace,
  ...new Perf().bladePerf,
  ...new Lms().bladeLms,
};
