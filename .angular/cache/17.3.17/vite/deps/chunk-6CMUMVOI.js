import {
  HttpClient
} from "./chunk-55VUH47M.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-JZDDGXGG.js";
import {
  CommonModule
} from "./chunk-3PIUJSML.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  Injectable,
  Input,
  Subscription,
  ViewChild,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-22GAGD2M.js";

// node_modules/@arpudhabotupload/fn-icon-angular/dist/fesm2022/arpudhabotupload-fn-icon-angular.mjs
var _c0 = ["iconContainer"];
var FNIconComponent = class _FNIconComponent {
  http;
  cdr;
  name;
  // Icon name without extension
  variant = "Line";
  size = "medium";
  color;
  strokeWidth;
  // optional - for line icons
  disabled = false;
  className = "";
  // CSS class name for Tailwind support
  basePath = "assets/icons";
  // Base path for icon assets
  iconContainer;
  // Size mapping
  sizeMap = {
    extrasmall: 10,
    small: 16,
    medium: 20,
    large: 24,
    "x-large": 32,
    xxlarge: 48
  };
  get iconSize() {
    return this.sizeMap[this.size];
  }
  constructor(http, cdr) {
    this.http = http;
    this.cdr = cdr;
  }
  getIconPath(icon, variant = "Line", size = 24) {
    if (!icon) return null;
    if (size === 16 || size === 10) {
      return `${this.basePath}/${variant}/${size}px/${icon}.svg`;
    }
    return `${this.basePath}/${variant}/${size}px/${icon}--${size}.svg`;
  }
  ngOnChanges() {
    if (!this.name) {
      this.clearSvg();
      return;
    }
    const iconPath = this.getIconPath(this.name, this.variant, this.iconSize);
    if (!iconPath) {
      this.clearSvg();
      return;
    }
    this.http.get(iconPath, {
      responseType: "text"
    }).subscribe({
      next: (raw) => this.processSvgRaw(raw),
      error: () => {
        this.clearSvg();
        this.cdr.detectChanges();
      }
    });
  }
  processSvgRaw(raw) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(raw, "image/svg+xml");
      const svg = this.validateSvgDocument(doc);
      if (!svg) {
        this.clearSvg();
        return;
      }
      this.removeStyleElements(svg);
      this.normalizeColors(svg);
      this.configureSvgAttributes(svg);
      this.insertSvg(svg);
      this.cdr.detectChanges();
    } catch (error) {
      console.error(`[fn-icon] Error parsing SVG for icon "${this.name}":`, error);
      this.clearSvg();
      this.cdr.detectChanges();
    }
  }
  clearSvg() {
    if (this.iconContainer?.nativeElement) {
      this.iconContainer.nativeElement.innerHTML = "";
    }
  }
  insertSvg(svg) {
    this.clearSvg();
    if (this.iconContainer?.nativeElement) {
      this.iconContainer.nativeElement.appendChild(svg);
    }
  }
  validateSvgDocument(doc) {
    const parserError = doc.querySelector("parsererror");
    if (parserError) {
      return null;
    }
    const svg = doc.documentElement;
    return svg.tagName === "svg" ? svg : null;
  }
  removeStyleElements(svg) {
    Array.from(svg.querySelectorAll("style")).forEach((s) => s.remove());
  }
  normalizeColors(svg) {
    if (!this.color) {
      return;
    }
    Array.from(svg.querySelectorAll("*")).forEach((el) => {
      this.normalizeElementColors(el);
    });
  }
  normalizeElementColors(el) {
    this.cleanInlineStyles(el);
    this.normalizeFillAttribute(el);
    this.normalizeStrokeAttribute(el);
    this.applyStrokeWidth(el);
  }
  cleanInlineStyles(el) {
    const style = el.getAttribute("style");
    if (!style) {
      return;
    }
    const cleaned = style.replace(/fill\s*:\s*[^;]+;?/gi, "").replace(/stroke\s*:\s*[^;]+;?/gi, "");
    if (cleaned) {
      el.setAttribute("style", cleaned);
    } else {
      el.removeAttribute("style");
    }
  }
  normalizeFillAttribute(el) {
    const fill = el.getAttribute("fill");
    if (fill && fill !== "none" && !fill.startsWith("url(")) {
      el.setAttribute("fill", "currentColor");
    }
  }
  normalizeStrokeAttribute(el) {
    const stroke = el.getAttribute("stroke");
    if (stroke && stroke !== "none" && !stroke.startsWith("url(")) {
      el.setAttribute("stroke", "currentColor");
    }
  }
  applyStrokeWidth(el) {
    if (this.strokeWidth != null && el.hasAttribute("stroke")) {
      el.setAttribute("stroke-width", String(this.strokeWidth));
    }
  }
  configureSvgAttributes(svg) {
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    if (!svg.getAttribute("viewBox")) {
      svg.setAttribute("viewBox", `0 0 ${this.iconSize} ${this.iconSize}`);
    }
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    if (svg.style) {
      svg.style.display = "block";
      svg.style.maxWidth = "100%";
      svg.style.maxHeight = "100%";
    } else {
      let style = svg.getAttribute("style") || "";
      style += ";display:block;max-width:100%;max-height:100%;";
      svg.setAttribute("style", style);
    }
  }
  static ɵfac = function FNIconComponent_Factory(t) {
    return new (t || _FNIconComponent)(ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FNIconComponent,
    selectors: [["fn-icon"]],
    viewQuery: function FNIconComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconContainer = _t.first);
      }
    },
    inputs: {
      name: "name",
      variant: "variant",
      size: "size",
      color: "color",
      strokeWidth: "strokeWidth",
      disabled: "disabled",
      className: "className",
      basePath: "basePath"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 16,
    consts: [["iconContainer", ""]],
    template: function FNIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "span", null, 0);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.className);
        ɵɵstyleProp("width", ctx.iconSize, "px")("height", ctx.iconSize, "px")("display", "block")("overflow", "hidden")("color", ctx.color ? ctx.color : null)("opacity", ctx.disabled ? 0.5 : 1)("cursor", ctx.disabled ? "not-allowed" : "inherit");
      }
    },
    dependencies: [CommonModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNIconComponent, [{
    type: Component,
    args: [{
      selector: "fn-icon",
      standalone: true,
      imports: [CommonModule],
      template: `
    <span
      #iconContainer
      [class]="className"
      [style.width.px]="iconSize"
      [style.height.px]="iconSize"
      [style.display]="'block'"
      [style.overflow]="'hidden'"
      [style.color]="color ? color : null"
      [style.opacity]="disabled ? 0.5 : 1"
      [style.cursor]="disabled ? 'not-allowed' : 'inherit'"
    ></span>
  `
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: ChangeDetectorRef
  }], {
    name: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    strokeWidth: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    basePath: [{
      type: Input
    }],
    iconContainer: [{
      type: ViewChild,
      args: ["iconContainer", {
        static: true
      }]
    }]
  });
})();

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
    consts: [[1, "toast-container"], [3, "class", "toast-enter"], [1, "toast-icon"], ["variant", "Colour", "size", "medium", 3, "name"], [1, "toast-content"], [1, "toast-message"], ["aria-label", "Close", 1, "toast-close", 3, "click"], ["name", "cross", "variant", "Line", "size", "medium", "color", "#ffffff"]],
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
    styles: [".toast-container[_ngcontent-%COMP%]{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast[_ngcontent-%COMP%]{display:flex;align-items:center;background:#1c2f40;border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.toast-icon[_ngcontent-%COMP%]{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0;background:transparent}.toast-icon[_ngcontent-%COMP%]   fn-icon[_ngcontent-%COMP%]{width:20px;height:20px;display:block}.toast-content[_ngcontent-%COMP%]{flex:1;min-width:0}.toast-message[_ngcontent-%COMP%]{font-size:14px;font-weight:500;line-height:20px;color:#fff;display:block}.toast-close[_ngcontent-%COMP%]{background:none;border:none;font-size:22px;color:#fff;opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast-close[_ngcontent-%COMP%]:hover{opacity:1}.toast.toast-leave[_ngcontent-%COMP%]{opacity:0;transform:translateY(-20px)}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNToast, [{
    type: Component,
    args: [{
      selector: "fn-toast",
      standalone: true,
      imports: [CommonModule, FNIconComponent, TranslateModule],
      template: '<div class="toast-container">\r\n  @for (toast of toasts(); track toast.id) {\r\n    <div class="toast toast-{{ toast.type }}" [class.toast-enter]="toast.isVisible">\r\n      <span class="toast-icon">\r\n        <fn-icon [name]="getIconName(toast)" variant="Colour" size="medium"></fn-icon>\r\n      </span>\r\n      <div class="toast-content">\r\n        <span class="toast-message">\r\n          {{ toast.message | translate }}\r\n        </span>\r\n      </div>\r\n      <button class="toast-close" (click)="removeToast(toast.id)" aria-label="Close">\r\n        <fn-icon name="cross" variant="Line" size="medium" color="#ffffff"></fn-icon>\r\n      </button>\r\n    </div>\r\n  }\r\n</div>\r\n',
      styles: [".toast-container{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast{display:flex;align-items:center;background:#1c2f40;border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter{opacity:1;transform:translateY(0)}.toast-icon{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0;background:transparent}.toast-icon fn-icon{width:20px;height:20px;display:block}.toast-content{flex:1;min-width:0}.toast-message{font-size:14px;font-weight:500;line-height:20px;color:#fff;display:block}.toast-close{background:none;border:none;font-size:22px;color:#fff;opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast-close:hover{opacity:1}.toast.toast-leave{opacity:0;transform:translateY(-20px)}\n"]
    }]
  }], () => [], null);
})();

export {
  FNIconComponent,
  ToastService,
  FNToast
};
//# sourceMappingURL=chunk-6CMUMVOI.js.map
