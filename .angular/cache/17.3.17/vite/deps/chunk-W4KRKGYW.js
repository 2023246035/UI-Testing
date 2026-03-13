import {
  HttpClient
} from "./chunk-55VUH47M.js";
import {
  CommonModule
} from "./chunk-3PIUJSML.js";
import {
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵstyleProp,
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

export {
  FNIconComponent
};
//# sourceMappingURL=chunk-W4KRKGYW.js.map
