import {
  FNIconComponent
} from "./chunk-W4KRKGYW.js";
import "./chunk-55VUH47M.js";
import {
  CommonModule
} from "./chunk-3PIUJSML.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JZDDGXGG.js";
import {
  BehaviorSubject,
  Component,
  Injectable,
  Subscription,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-22GAGD2M.js";

// node_modules/fn-toast/fesm2022/fn-toast.mjs
var _forTrack0 = ($index, $item) => $item.id;
function FNToast_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "span", 2);
    ɵɵelement(2, "fn-icon", 3);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 4)(4, "span", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "button", 6);
    ɵɵlistener("click", function FNToast_For_2_Template_button_click_7_listener() {
      const toast_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeToast(toast_r2.id));
    });
    ɵɵelement(8, "fn-icon", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const toast_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("toast toast-", toast_r2.type, "");
    ɵɵclassProp("toast-enter", toast_r2.isVisible);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r2.getIconName(toast_r2));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, toast_r2.message), " ");
  }
}
var ToastService = class _ToastService {
  toastsSubject = new BehaviorSubject([]);
  toasts$ = this.toastsSubject.asObservable();
  generateId() {
    return crypto.randomUUID();
  }
  addToast(toast) {
    const newToast = __spreadProps(__spreadValues({}, toast), {
      id: this.generateId(),
      isVisible: false
    });
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, newToast]);
    setTimeout(() => {
      const toasts = this.toastsSubject.value;
      const toastIndex = toasts.findIndex((t) => t.id === newToast.id);
      if (toastIndex !== -1) {
        toasts[toastIndex].isVisible = true;
        this.toastsSubject.next([...toasts]);
      }
    }, 10);
    if (toast.duration && toast.duration > 0) {
      setTimeout(() => {
        this.remove(newToast.id);
      }, toast.duration);
    }
    return newToast.id;
  }
  success(message, title, duration = 3e3) {
    return this.addToast({
      type: "success",
      title,
      message,
      duration
    });
  }
  error(message, title, duration = 5e3) {
    return this.addToast({
      type: "error",
      title,
      message,
      duration
    });
  }
  warn(message, title, duration = 5e3) {
    return this.addToast({
      type: "warn",
      title,
      message,
      duration
    });
  }
  info(message, title, duration = 5e3) {
    return this.addToast({
      type: "info",
      title,
      message,
      duration
    });
  }
  remove(id) {
    const currentToasts = this.toastsSubject.value;
    const filteredToasts = currentToasts.filter((toast) => toast.id !== id);
    this.toastsSubject.next(filteredToasts);
  }
  clear() {
    this.toastsSubject.next([]);
  }
  static ɵfac = function ToastService_Factory(t) {
    return new (t || _ToastService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ToastService,
    factory: _ToastService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var FNToast = class _FNToast {
  toasts = signal([]);
  subscription = new Subscription();
  toastService = inject(ToastService);
  constructor() {
  }
  ngOnInit() {
    this.subscription.add(this.toastService.toasts$.subscribe((toasts) => {
      this.toasts.set(toasts);
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  removeToast(id) {
    this.toastService.remove(id);
  }
  getIconName(toast) {
    switch (toast.type) {
      case "success":
        return "check-circle-colour";
      case "warn":
        return "info-circle-colour";
      case "error":
        return "exclamation-circle-colour";
      case "info":
        return "info-circle-colour";
      default:
        return "info-circle-colour";
    }
  }
  static ɵfac = function FNToast_Factory(t) {
    return new (t || _FNToast)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FNToast,
    selectors: [["fn-toast"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 3,
    vars: 0,
    consts: [[1, "toast-container"], [3, "class", "toast-enter"], [1, "toast-icon"], ["variant", "Colour", "size", "medium", 3, "name"], [1, "toast-content"], [1, "toast-message"], ["aria-label", "Close", 1, "toast-close", 3, "click"], ["name", "cross", "variant", "Line", "size", "medium", "color", "var(--Base-0)"]],
    template: function FNToast_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵrepeaterCreate(1, FNToast_For_2_Template, 9, 9, "div", 1, _forTrack0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵrepeater(ctx.toasts());
      }
    },
    dependencies: [CommonModule, FNIconComponent, TranslateModule, TranslatePipe],
    styles: [".toast-container[_ngcontent-%COMP%]{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast[_ngcontent-%COMP%]{display:flex;align-items:center;background:var(--Base-90);border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.toast-icon[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0;background:transparent}.toast-icon[_ngcontent-%COMP%]   fn-icon[_ngcontent-%COMP%]{width:20px;height:20px;display:block}.toast-content[_ngcontent-%COMP%]{flex:1;min-width:0}.toast-message[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:var(--Base-0);display:block}.toast-close[_ngcontent-%COMP%]{background:none;border:none;font-size:22px;color:var(--Base-0);opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast.toast-leave[_ngcontent-%COMP%]{opacity:0;transform:translateY(-20px)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNToast, [{
    type: Component,
    args: [{
      selector: "fn-toast",
      standalone: true,
      imports: [CommonModule, FNIconComponent, TranslateModule],
      template: '<div class="toast-container">\r\n  @for (toast of toasts(); track toast.id) {\r\n    <div class="toast toast-{{ toast.type }}" [class.toast-enter]="toast.isVisible">\r\n      <span class="toast-icon">\r\n        <fn-icon [name]="getIconName(toast)" variant="Colour" size="medium"></fn-icon>\r\n      </span>\r\n      <div class="toast-content">\r\n        <span class="toast-message">\r\n          {{ toast.message | translate }}\r\n        </span>\r\n      </div>\r\n      <button class="toast-close" (click)="removeToast(toast.id)" aria-label="Close">\r\n        <fn-icon name="cross" variant="Line" size="medium" color="var(--Base-0)"></fn-icon>\r\n      </button>\r\n    </div>\r\n  }\r\n</div>\r\n',
      styles: [".toast-container{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast{display:flex;align-items:center;background:var(--Base-90);border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter{opacity:1;transform:translateY(0)}.toast-icon{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0;background:transparent}.toast-icon fn-icon{width:20px;height:20px;display:block}.toast-content{flex:1;min-width:0}.toast-message{font-size:14px;line-height:20px;color:var(--Base-0);display:block}.toast-close{background:none;border:none;font-size:22px;color:var(--Base-0);opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast-close:hover{opacity:1}.toast.toast-leave{opacity:0;transform:translateY(-20px)}\n"]
    }]
  }], () => [], null);
})();
export {
  FNToast,
  ToastService
};
//# sourceMappingURL=fn-toast.js.map
