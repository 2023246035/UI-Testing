import {
  TranslateModule,
  TranslateService
} from "./chunk-JZDDGXGG.js";
import {
  CommonModule,
  NgClass
} from "./chunk-3PIUJSML.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-22GAGD2M.js";

// node_modules/fn-label/fesm2022/fn-label.mjs
function FNLabel_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " (Optional)");
    ɵɵelementEnd();
  }
}
function FNLabel_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 1);
    ɵɵtext(1);
    ɵɵtemplate(2, FNLabel_Conditional_0_Conditional_2_Template, 2, 0, "span");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap("fn-label !whitespace-normal " + (ctx_r0.statusLabel || (ctx_r0.field == null ? null : ctx_r0.field.statusLabel) ? ctx_r0.statusLabel || (ctx_r0.field == null ? null : ctx_r0.field.statusLabel) : (ctx_r0.field == null ? null : ctx_r0.field.variant) || ctx_r0.variant || "") + " " + (ctx_r0.class || ctx_r0.className || (ctx_r0.field == null ? null : ctx_r0.field.className) || ""));
    ɵɵstyleProp("color", ctx_r0.color || null);
    ɵɵproperty("for", ctx_r0.for || ctx_r0.label)("ngClass", ctx_r0.ngClass);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.getTranslatedLabel(ctx_r0.label || (ctx_r0.field == null ? null : ctx_r0.field.label) || ""), " ");
    ɵɵadvance();
    ɵɵconditional(2, !ctx_r0.required && !ctx_r0.hideOptional && !(ctx_r0.field == null ? null : ctx_r0.field.hideOptional) ? 2 : -1);
  }
}
var FNLabel = class _FNLabel {
  translate;
  // 🧩 Inputs
  field;
  label = "";
  required = true;
  className = "";
  class = "";
  for = "";
  color = "";
  // accepts hex, rgb, var(--token), or Tailwind class
  variant = "p1";
  statusLabel;
  ngClass = {};
  hideOptional = false;
  constructor(translate) {
    this.translate = translate;
  }
  ngOnInit() {
    this.initialize();
    if (this.label !== void 0 && this.label !== null && this.label !== "") {
      if (Array.isArray(this.label)) {
        this.label = this.label.toString().split(",").join(", ");
      } else if (typeof this.label === "string" || typeof this.label === "number") {
        this.label = this.label.toString();
      } else {
        this.label = "";
      }
    }
  }
  ngOnChanges(changes) {
    if (changes["required"] || changes["label"]) {
      this.initialize();
    }
  }
  getEndSymbol(label) {
    return label.toString().includes("required") && label.toString().includes("FNFieldMessage") ? "." : "";
  }
  getTranslatedLabel(label) {
    if (label === void 0 || label === null || label === "") return "";
    try {
      const labelStr = label.toString();
      return `${labelStr.split("::").map((part) => part.trim()).filter((part) => !!part).map((part) => this.translate.instant(part)).join(" ")}${this.getEndSymbol(labelStr)}`;
    } catch (e) {
      console.error("Error translating label:", label, e);
      return "";
    }
  }
  initialize() {
  }
  static ɵfac = function FNLabel_Factory(t) {
    return new (t || _FNLabel)(ɵɵdirectiveInject(TranslateService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FNLabel,
    selectors: [["fn-label"]],
    inputs: {
      field: "field",
      label: "label",
      required: "required",
      className: "className",
      class: "class",
      for: "for",
      color: "color",
      variant: "variant",
      statusLabel: "statusLabel",
      ngClass: "ngClass",
      hideOptional: "hideOptional"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "for", "ngClass", "class", "color"], [3, "for", "ngClass"]],
    template: function FNLabel_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, FNLabel_Conditional_0_Template, 3, 8, "label", 0);
      }
      if (rf & 2) {
        ɵɵconditional(0, ctx.label !== void 0 && ctx.label !== null && ctx.label !== "" || (ctx.field == null ? null : ctx.field.label) !== void 0 && (ctx.field == null ? null : ctx.field.label) !== null && (ctx.field == null ? null : ctx.field.label) !== "" ? 0 : -1);
      }
    },
    dependencies: [CommonModule, NgClass, TranslateModule],
    styles: [".fn-label[_ngcontent-%COMP%]{color:var(--Base-100);display:flex;letter-spacing:0}.fn-label.h1Bold[_ngcontent-%COMP%]{font-size:24px;font-weight:700;line-height:32px}.fn-label.h1[_ngcontent-%COMP%]{font-size:24px;font-weight:400;line-height:32px}.fn-label.h2Bold[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:700}.fn-label.h2[_ngcontent-%COMP%]{font-size:20px;line-height:24px;font-weight:400}.fn-label.h3Bold[_ngcontent-%COMP%]{font-size:18px;line-height:24px;font-weight:700}.fn-label.h3[_ngcontent-%COMP%], .fn-label.p1[_ngcontent-%COMP%]{font-size:18px;line-height:24px;font-weight:400}.fn-label.p1Bold[_ngcontent-%COMP%]{font-size:18px;line-height:24px;font-weight:700}.fn-label.p2[_ngcontent-%COMP%]{font-size:16px;font-weight:400;line-height:24px}.fn-label.p2Bold[_ngcontent-%COMP%]{font-size:16px;font-weight:700;line-height:24px}.fn-label.p3[_ngcontent-%COMP%]{font-size:14px;line-height:20px;font-weight:400}.fn-label.p3Bold[_ngcontent-%COMP%]{font-size:14px;line-height:20px;font-weight:700}.fn-label.p4[_ngcontent-%COMP%]{font-size:12px;line-height:16px;font-weight:400}.fn-label.p4Bold[_ngcontent-%COMP%]{font-size:12px;line-height:16px;font-weight:700}.fn-label.Standard[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #78c5ff!important;color:#0067b1!important;background:#def1ff!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Warning[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #f7cfa8!important;color:#c0410b!important;background:#fdebda!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Success[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #b5e1a4!important;color:#065c00!important;background:#e2f3db!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Hot[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #fc91a3!important;color:#bf1f21!important;background:#fed7db!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Disabled[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #c4cdd2!important;color:#4f5d6b!important;background:#eef0f2!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.RHBPremierBanking[_ngcontent-%COMP%]{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #e0e4e9!important;color:#c4cdd2!important;background:#002353!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.interactionLarge[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:400}.fn-label.interactionLargeBold[_ngcontent-%COMP%]{font-size:16px;line-height:24px;font-weight:700}.fn-label.interactionMedium[_ngcontent-%COMP%]{font-size:14px;line-height:20px;font-weight:400}.fn-label.interactionMediumBold[_ngcontent-%COMP%]{font-size:14px;line-height:20px;font-weight:700}.fn-label.interactionSmall[_ngcontent-%COMP%]{font-size:12px;line-height:16px;font-weight:400}.fn-label.interactionSmallBold[_ngcontent-%COMP%]{font-size:12px;line-height:16px;font-weight:700}.fn-label.avatarLabel[_ngcontent-%COMP%]{font-family:Lato,sans-serif;font-weight:400;font-style:normal;font-size:28.8px;line-height:38.4px;letter-spacing:0%;text-align:center}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNLabel, [{
    type: Component,
    args: [{
      selector: "fn-label",
      standalone: true,
      imports: [CommonModule, TranslateModule],
      template: `
    @if (
      (label !== undefined && label !== null && label !== '') ||
      (field?.label !== undefined && field?.label !== null && field?.label !== '')
    ) {
      <label
        [for]="for || label"
        [ngClass]="ngClass"
        [class]="
          'fn-label !whitespace-normal ' +
          (statusLabel || field?.statusLabel
            ? statusLabel || field?.statusLabel
            : field?.variant || variant || '') +
          ' ' +
          (class || className || field?.className || '')
        "
        [style.color]="color || null"
      >
        {{ getTranslatedLabel(label || field?.label || '') }}
        @if (!required && !hideOptional && !field?.hideOptional) {
          <span>&nbsp;(Optional)</span>
        }
      </label>
    }
  `,
      styles: [".fn-label{color:var(--Base-100);display:flex;letter-spacing:0}.fn-label.h1Bold{font-size:24px;font-weight:700;line-height:32px}.fn-label.h1{font-size:24px;font-weight:400;line-height:32px}.fn-label.h2Bold{font-size:20px;line-height:24px;font-weight:700}.fn-label.h2{font-size:20px;line-height:24px;font-weight:400}.fn-label.h3Bold{font-size:18px;line-height:24px;font-weight:700}.fn-label.h3,.fn-label.p1{font-size:18px;line-height:24px;font-weight:400}.fn-label.p1Bold{font-size:18px;line-height:24px;font-weight:700}.fn-label.p2{font-size:16px;font-weight:400;line-height:24px}.fn-label.p2Bold{font-size:16px;font-weight:700;line-height:24px}.fn-label.p3{font-size:14px;line-height:20px;font-weight:400}.fn-label.p3Bold{font-size:14px;line-height:20px;font-weight:700}.fn-label.p4{font-size:12px;line-height:16px;font-weight:400}.fn-label.p4Bold{font-size:12px;line-height:16px;font-weight:700}.fn-label.Standard{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #78c5ff!important;color:#0067b1!important;background:#def1ff!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Warning{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #f7cfa8!important;color:#c0410b!important;background:#fdebda!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Success{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #b5e1a4!important;color:#065c00!important;background:#e2f3db!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Hot{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #fc91a3!important;color:#bf1f21!important;background:#fed7db!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.Disabled{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #c4cdd2!important;color:#4f5d6b!important;background:#eef0f2!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.RHBPremierBanking{height:24px!important;border-radius:4px!important;padding:3px 8px 5px!important;border:1px solid #e0e4e9!important;color:#c4cdd2!important;background:#002353!important;font-weight:700!important;font-size:12px!important;line-height:16px!important;width:max-content}.fn-label.interactionLarge{font-size:16px;line-height:24px;font-weight:400}.fn-label.interactionLargeBold{font-size:16px;line-height:24px;font-weight:700}.fn-label.interactionMedium{font-size:14px;line-height:20px;font-weight:400}.fn-label.interactionMediumBold{font-size:14px;line-height:20px;font-weight:700}.fn-label.interactionSmall{font-size:12px;line-height:16px;font-weight:400}.fn-label.interactionSmallBold{font-size:12px;line-height:16px;font-weight:700}.fn-label.avatarLabel{font-family:Lato,sans-serif;font-weight:400;font-style:normal;font-size:28.8px;line-height:38.4px;letter-spacing:0%;text-align:center}\n"]
    }]
  }], () => [{
    type: TranslateService
  }], {
    field: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    className: [{
      type: Input
    }],
    class: [{
      type: Input
    }],
    for: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    statusLabel: [{
      type: Input
    }],
    ngClass: [{
      type: Input
    }],
    hideOptional: [{
      type: Input
    }]
  });
})();

export {
  FNLabel
};
//# sourceMappingURL=chunk-ENHLTDN7.js.map
