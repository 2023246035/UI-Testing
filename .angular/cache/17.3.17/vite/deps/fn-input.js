import {
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
  RequiredValidator
} from "./chunk-HAUCSGP4.js";
import {
  FNLabel
} from "./chunk-ENHLTDN7.js";
import {
  FNIconComponent
} from "./chunk-W4KRKGYW.js";
import "./chunk-55VUH47M.js";
import {
  TranslateModule,
  TranslatePipe,
  TranslateService
} from "./chunk-JZDDGXGG.js";
import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-3PIUJSML.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  InjectionToken,
  Input,
  Output,
  Subscription,
  ViewChild,
  __spreadProps,
  __spreadValues,
  inject,
  merge,
  setClassMetadata,
  signal,
  startWith,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-22GAGD2M.js";

// node_modules/fn-input/fesm2022/fn-input.mjs
var _c0 = ["fnTextarea"];
var _forTrack0 = ($index, $item) => $item.id;
var _c1 = (a0, a1, a2) => ({
  disabled: a0,
  error: a1,
  success: a2
});
var _c2 = (a0, a1) => ({
  color: a0,
  "font-size": a1
});
var _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  disabled: a0,
  error: a1,
  success: a2,
  "pl-10": a3,
  "has-prefix-text": a4,
  "pr-12": a5,
  "pr-24": a6,
  "pr-32": a7
});
var _c4 = (a0) => ({
  color: a0
});
var _c5 = (a0) => ({
  "opacity-50 cursor-not-allowed": a0
});
var _c6 = (a0, a1, a2) => ({
  "bg-[#ef3e42]": a0,
  "bg-[#ff9f00]": a1,
  "bg-[#6cc24a]": a2
});
var _c7 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  disabled: a0,
  error: a1,
  success: a2,
  "pl-10": a3,
  "has-prefix-text": a4,
  "pr-10": a5,
  "has-suffix-text": a6,
  "text-[24px] font-bold": a7
});
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) => ({
  disabled: a0,
  error: a1,
  success: a2,
  "pl-10": a3,
  "has-prefix-text": a4,
  "pr-10": a5,
  "has-suffix-text": a6,
  "pr-20": a7,
  "pr-30": a8,
  "pr-32": a9
});
var _c9 = (a0, a1) => ({
  error: a0,
  success: a1
});
function FNInput_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "fn-label", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("for", ctx_r0.uniqueId)("label", ctx_r0.field.label)("required", ctx_r0.field.required || false)("hideOptional", ctx_r0.field.hideOptional || false)("color", ctx_r0.field.color || "#03182b")("variant", ctx_r0.field.labelVariant || "p1")("statusLabel", ctx_r0.field.statusLabel);
  }
}
function FNInput_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 6, 0);
    ɵɵpipe(2, "translate");
    ɵɵlistener("input", function FNInput_Conditional_0_Case_3_Template_textarea_input_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleTextArea($event));
    })("blur", function FNInput_Conditional_0_Case_3_Template_textarea_blur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleBlur($event));
    })("focus", function FNInput_Conditional_0_Case_3_Template_textarea_focus_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onFocus());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.field.name)("id", ctx_r0.uniqueId)("required", ctx_r0.field.required || false)("placeholder", ɵɵpipeBind1(2, 10, ctx_r0.field.placeholder || ""))("disabled", ctx_r0.field.disabled || false)("rows", ctx_r0.field.rows || 1)("readonly", ctx_r0.field.readOnly || false)("formControl", ctx_r0.control)("ngClass", ɵɵpureFunction3(12, _c1, ctx_r0.control.disabled || ctx_r0.field.readOnly, ctx_r0.control.touched && ctx_r0.control.errors, ctx_r0.field["hasSuccessBorder"] && ctx_r0.control.valid && !ctx_r0.control.errors))("ngStyle", ɵɵpureFunction2(16, _c2, ctx_r0.field.valueColor || "inherit", ctx_r0.field.valueSize || ""));
  }
}
function FNInput_Conditional_0_Case_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "fn-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("name", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) || "")("variant", "Line")("size", "medium")("color", ctx_r0.control.disabled ? "#c4cdd2" : "#03182b");
  }
}
function FNInput_Conditional_0_Case_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_3_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    })("keydown.enter", function FNInput_Conditional_0_Case_4_Conditional_3_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassProp("cursor-pointer", !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c4, ctx_r0.control.disabled ? "#c4cdd2" : "#03182b"));
    ɵɵattribute("tabindex", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick) ? 0 : null);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.field.prefix.text);
  }
}
function FNInput_Conditional_0_Case_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_7_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.togglePasswordVisibility());
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_7_Template_span_keydown_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.togglePasswordVisibility());
    });
    ɵɵelement(1, "fn-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.showPassword ? "eye-open" : "eye-close")("variant", "Line")("size", "large")("color", "#03182b");
  }
}
function FNInput_Conditional_0_Case_4_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_8_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_8_Conditional_2_Template_span_keydown_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    });
    ɵɵelement(1, "fn-icon", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("name", "round-arrow-top-left")("variant", "Line")("size", "large")("color", "#03182b");
  }
}
function FNInput_Conditional_0_Case_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_8_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_8_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    });
    ɵɵelement(1, "fn-icon", 17);
    ɵɵelementEnd();
    ɵɵtemplate(2, FNInput_Conditional_0_Case_4_Conditional_8_Conditional_2_Template, 2, 4, "span", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("name", "two-square")("color", "#03182b");
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.field.hasGenerateKey ? 2 : -1);
  }
}
function FNInput_Conditional_0_Case_4_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_9_Conditional_4_Template_span_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_9_Conditional_4_Template_span_keydown_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    });
    ɵɵelement(1, "fn-icon", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c5, !ctx_r0.control.value));
    ɵɵadvance();
    ɵɵproperty("name", "round-arrow-top-left")("color", "#03182b");
  }
}
function FNInput_Conditional_0_Case_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_9_Template_span_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.togglePasswordVisibility());
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_9_Template_span_keydown_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.togglePasswordVisibility());
    });
    ɵɵelement(1, "fn-icon", 9);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_4_Conditional_9_Template_span_click_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    })("keydown", function FNInput_Conditional_0_Case_4_Conditional_9_Template_span_keydown_2_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    });
    ɵɵelement(3, "fn-icon", 17);
    ɵɵelementEnd();
    ɵɵtemplate(4, FNInput_Conditional_0_Case_4_Conditional_9_Conditional_4_Template, 2, 5, "span", 18);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.showPassword ? "eye-open" : "eye-close")("variant", "Line")("size", "large")("color", "#03182b");
    ɵɵadvance(2);
    ɵɵproperty("name", "two-square")("color", "#03182b");
    ɵɵadvance();
    ɵɵconditional(4, ctx_r0.field.hasGenerateKey ? 4 : -1);
  }
}
function FNInput_Conditional_0_Case_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14)(1, "div", 20)(2, "span", 21);
    ɵɵtext(3);
    ɵɵpipe(4, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 22);
    ɵɵelement(6, "fn-icon", 9);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 23);
    ɵɵelement(8, "div", 24);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ctx_r0.strengthClass);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, ctx_r0.passwordStrengthLabel), " ");
    ɵɵadvance(3);
    ɵɵproperty("name", ctx_r0.passwordStrengthPercent > 50 ? "check-circle" : "info-circle")("variant", "Line")("size", "extrasmall")("color", ctx_r0.passwordStrengthPercent <= 25 ? "#ef3e42" : ctx_r0.passwordStrengthPercent <= 75 ? "#ff9f00" : "#6cc24a");
    ɵɵadvance(2);
    ɵɵstyleProp("width", ctx_r0.passwordStrengthPercent, "%");
    ɵɵproperty("ngClass", ɵɵpureFunction3(11, _c6, ctx_r0.passwordStrengthPercent <= 25, ctx_r0.passwordStrengthPercent > 25 && ctx_r0.passwordStrengthPercent <= 75, ctx_r0.passwordStrengthPercent > 75));
  }
}
function FNInput_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "div", 8);
    ɵɵtemplate(2, FNInput_Conditional_0_Case_4_Conditional_2_Template, 1, 4, "fn-icon", 9)(3, FNInput_Conditional_0_Case_4_Conditional_3_Template, 2, 7, "span", 10);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 11);
    ɵɵpipe(5, "translate");
    ɵɵlistener("input", function FNInput_Conditional_0_Case_4_Template_input_input_4_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.isAlphanumeric ? ctx_r0.handleAlphanumericInput($event) : ctx_r0.handleInput($event));
    })("focus", function FNInput_Conditional_0_Case_4_Template_input_focus_4_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPasswordFocus());
    })("blur", function FNInput_Conditional_0_Case_4_Template_input_blur_4_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handlePasswordBlur($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 12);
    ɵɵtemplate(7, FNInput_Conditional_0_Case_4_Conditional_7_Template, 2, 4, "span", 13)(8, FNInput_Conditional_0_Case_4_Conditional_8_Template, 3, 3)(9, FNInput_Conditional_0_Case_4_Conditional_9_Template, 5, 7);
    ɵɵelementEnd()();
    ɵɵtemplate(10, FNInput_Conditional_0_Case_4_Conditional_10_Template, 9, 15, "div", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵconditional(2, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) ? 2 : -1);
    ɵɵadvance();
    ɵɵconditional(3, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text) ? 3 : -1);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.showPassword ? "text" : "password")("id", ctx_r0.uniqueId)("required", ctx_r0.field.required || false)("disabled", ctx_r0.field.disabled || false)("formControl", ctx_r0.control)("placeholder", ɵɵpipeBind1(5, 13, ctx_r0.field.placeholder || ""))("readonly", ctx_r0.field.readOnly || false)("ngClass", ɵɵpureFunction8(15, _c3, ctx_r0.control.disabled || ctx_r0.field.readOnly, ctx_r0.control.touched && ctx_r0.control.errors, ctx_r0.field["hasSuccessBorder"] && ctx_r0.control.valid, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) && !(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), ctx_r0.field.toggleMask && !ctx_r0.field.isCopyText || !ctx_r0.field.toggleMask && ctx_r0.field.isCopyText, ctx_r0.field.toggleMask && ctx_r0.field.isCopyText && !ctx_r0.field.hasGenerateKey, ctx_r0.field.toggleMask && ctx_r0.field.isCopyText && ctx_r0.field.hasGenerateKey))("ngStyle", ɵɵpureFunction2(24, _c2, ctx_r0.field.valueColor || "inherit", ctx_r0.field.valueSize || ""));
    ɵɵadvance(3);
    ɵɵconditional(7, ctx_r0.field.toggleMask && !ctx_r0.field.isCopyText ? 7 : ctx_r0.field.isCopyText && !ctx_r0.field.toggleMask ? 8 : ctx_r0.field.toggleMask && ctx_r0.field.isCopyText ? 9 : -1);
    ɵɵadvance(3);
    ɵɵconditional(10, ctx_r0.field.feedback && ctx_r0.isPasswordFocused ? 10 : -1);
  }
}
function FNInput_Conditional_0_Case_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "fn-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("name", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) || "")("variant", "Line")("size", "medium")("color", ctx_r0.control.disabled ? "#c4cdd2" : "#03182b");
  }
}
function FNInput_Conditional_0_Case_5_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_5_Conditional_1_Conditional_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    })("keydown.enter", function FNInput_Conditional_0_Case_5_Conditional_1_Conditional_2_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassProp("cursor-pointer", !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c4, ctx_r0.control.disabled ? "#c4cdd2" : "#03182b"));
    ɵɵattribute("tabindex", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick) ? 0 : null);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.field.prefix.text);
  }
}
function FNInput_Conditional_0_Case_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, FNInput_Conditional_0_Case_5_Conditional_1_Conditional_1_Template, 1, 4, "fn-icon", 9)(2, FNInput_Conditional_0_Case_5_Conditional_1_Conditional_2_Template, 2, 7, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(1, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text) ? 2 : -1);
  }
}
function FNInput_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7);
    ɵɵtemplate(1, FNInput_Conditional_0_Case_5_Conditional_1_Template, 3, 2, "div", 8);
    ɵɵelementStart(2, "input", 25);
    ɵɵpipe(3, "translate");
    ɵɵlistener("input", function FNInput_Conditional_0_Case_5_Template_input_input_2_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleNumberInput($event, ctx_r0.field.minFractionDigits || 2));
    })("paste", function FNInput_Conditional_0_Case_5_Template_input_paste_2_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleNumberPaste($event, ctx_r0.field.minFractionDigits || 2));
    })("blur", function FNInput_Conditional_0_Case_5_Template_input_blur_2_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleBlur($event, ctx_r0.field.minFractionDigits || 2));
    })("keydown", function FNInput_Conditional_0_Case_5_Template_input_keydown_2_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleNumberKeydown($event, ctx_r0.field.isCurrency || false));
    })("focus", function FNInput_Conditional_0_Case_5_Template_input_focus_2_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onFocus());
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) || (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text) ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.field.type === "number" && ctx_r0.field.isCurrency ? "text" : "number")("name", ctx_r0.field.name)("id", ctx_r0.uniqueId)("required", ctx_r0.field.required || false)("placeholder", ɵɵpipeBind1(3, 14, ctx_r0.field.placeholder || ""))("disabled", ctx_r0.isDisabled || false)("readOnly", ctx_r0.field.readOnly || false)("formControl", ctx_r0.control)("min", ctx_r0.field.type === "number" && !ctx_r0.field.isCurrency ? 0 : null)("max", ctx_r0.field.type === "number" && !ctx_r0.field.isCurrency ? ctx_r0.field.max : null)("step", ctx_r0.field.type === "number" && !ctx_r0.field.isCurrency ? ctx_r0.field.step || 1 : null)("ngClass", ɵɵpureFunction8(16, _c7, ctx_r0.control.disabled || ctx_r0.field.readOnly, ctx_r0.control.touched && ctx_r0.control.errors, ctx_r0.field["hasSuccessBorder"] && ctx_r0.control.valid && !ctx_r0.control.errors, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) && !(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon) && !(ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text), !!(ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text), ctx_r0.field.isCurrency))("ngStyle", ɵɵpureFunction2(25, _c2, ctx_r0.field.valueColor || "inherit", ctx_r0.field.valueSize || ""));
  }
}
function FNInput_Conditional_0_Case_6_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "fn-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("name", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) || "")("variant", "Line")("size", "medium")("color", ctx_r0.control.disabled ? "#c4cdd2" : "#03182b");
  }
}
function FNInput_Conditional_0_Case_6_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_6_Conditional_1_Conditional_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    })("keydown.enter", function FNInput_Conditional_0_Case_6_Conditional_1_Conditional_2_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r13);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.prefixClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassProp("cursor-pointer", !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c4, ctx_r0.control.disabled ? "#c4cdd2" : "#03182b"));
    ɵɵattribute("tabindex", (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.onClick) ? 0 : null);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.field.prefix.text);
  }
}
function FNInput_Conditional_0_Case_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, FNInput_Conditional_0_Case_6_Conditional_1_Conditional_1_Template, 1, 4, "fn-icon", 9)(2, FNInput_Conditional_0_Case_6_Conditional_1_Conditional_2_Template, 2, 7, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵconditional(1, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text) ? 2 : -1);
  }
}
function FNInput_Conditional_0_Case_6_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_6_Conditional_5_Conditional_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    })("keydown", function FNInput_Conditional_0_Case_6_Conditional_5_Conditional_2_Template_span_keydown_0_listener() {
      ɵɵrestoreView(_r15);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.field.onGenerateKey && ctx_r0.field.onGenerateKey());
    });
    ɵɵelement(1, "fn-icon", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("name", "round-arrow-top-left")("color", "#03182b");
  }
}
function FNInput_Conditional_0_Case_6_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_6_Conditional_5_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    })("keydown", function FNInput_Conditional_0_Case_6_Conditional_5_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.copyText($event));
    });
    ɵɵelement(1, "fn-icon", 17);
    ɵɵelementEnd();
    ɵɵtemplate(2, FNInput_Conditional_0_Case_6_Conditional_5_Conditional_2_Template, 2, 2, "span", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("name", "two-square")("color", "#03182b");
    ɵɵadvance();
    ɵɵconditional(2, ctx_r0.field.hasGenerateKey ? 2 : -1);
  }
}
function FNInput_Conditional_0_Case_6_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15);
    ɵɵlistener("click", function FNInput_Conditional_0_Case_6_Conditional_6_Conditional_0_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.suffixClick($event));
    })("keydown.enter", function FNInput_Conditional_0_Case_6_Conditional_6_Conditional_0_Template_span_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r16);
      const ctx_r0 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r0.suffixClick($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵclassProp("cursor-pointer", !!(ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.onClick));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c4, ctx_r0.control.disabled ? "#c4cdd2" : "#03182b"));
    ɵɵattribute("tabindex", (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.onClick) ? 0 : null);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.field.suffix.text);
  }
}
function FNInput_Conditional_0_Case_6_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "fn-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("name", (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon) || (ctx_r0.field.icon == null ? null : ctx_r0.field.icon.name) || "")("variant", (ctx_r0.field.icon == null ? null : ctx_r0.field.icon.variant) || "Line")("size", ctx_r0.field.icon ? ctx_r0.getIconSizeName(ctx_r0.field.icon.size) : "medium")("color", ctx_r0.control.disabled ? "#c4cdd2" : "#03182b");
  }
}
function FNInput_Conditional_0_Case_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FNInput_Conditional_0_Case_6_Conditional_6_Conditional_0_Template, 2, 7, "span", 10)(1, FNInput_Conditional_0_Case_6_Conditional_6_Conditional_1_Template, 1, 4, "fn-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵconditional(0, (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text) ? 0 : -1);
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon) ? 1 : -1);
  }
}
function FNInput_Conditional_0_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, FNInput_Conditional_0_Case_6_Conditional_1_Template, 3, 2, "div", 8);
    ɵɵelementStart(2, "input", 27);
    ɵɵpipe(3, "translate");
    ɵɵlistener("input", function FNInput_Conditional_0_Case_6_Template_input_input_2_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.isEmailField ? ctx_r0.handleEmailInput($event) : ctx_r0.field.type === "text" && ctx_r0.isAlphanumeric ? ctx_r0.handleAlphanumericInput($event) : ctx_r0.handleInput($event));
    })("blur", function FNInput_Conditional_0_Case_6_Template_input_blur_2_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.handleBlur($event));
    })("focus", function FNInput_Conditional_0_Case_6_Template_input_focus_2_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onFocus());
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 12);
    ɵɵtemplate(5, FNInput_Conditional_0_Case_6_Conditional_5_Template, 3, 3)(6, FNInput_Conditional_0_Case_6_Conditional_6_Template, 2, 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) || (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text) ? 1 : -1);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.field.type)("name", ctx_r0.field.name)("id", ctx_r0.uniqueId)("required", ctx_r0.field.required || false)("placeholder", ɵɵpipeBind1(3, 13, ctx_r0.field.placeholder || ""))("disabled", ctx_r0.field.disabled || false)("readOnly", ctx_r0.field.readOnly || false)("formControl", ctx_r0.control)("ngClass", ɵɵpureFunctionV(15, _c8, [ctx_r0.control.disabled || ctx_r0.field.readOnly, ctx_r0.control.touched && ctx_r0.control.errors, ctx_r0.field["hasSuccessBorder"] && ctx_r0.control.valid && !ctx_r0.control.errors, (ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.icon) && !(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), !!(ctx_r0.field.prefix == null ? null : ctx_r0.field.prefix.text), (ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon)) && !ctx_r0.field.isCopyText && !(ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text), !!(ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text), ctx_r0.field.isCopyText && !ctx_r0.field.hasGenerateKey && !(ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon)), ctx_r0.field.isCopyText && ctx_r0.field.hasGenerateKey && !(ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon)), ctx_r0.field.isCopyText && ctx_r0.field.hasGenerateKey && (ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon))]))("ngStyle", ɵɵpureFunction2(26, _c2, ctx_r0.field.valueColor || "inherit", ctx_r0.field.valueSize || ""));
    ɵɵadvance(3);
    ɵɵconditional(5, ctx_r0.field.isCopyText ? 5 : -1);
    ɵɵadvance();
    ɵɵconditional(6, ctx_r0.field.icon || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.icon) || (ctx_r0.field.suffix == null ? null : ctx_r0.field.suffix.text) ? 6 : -1);
  }
}
function FNInput_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "span", 28);
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c9, ctx_r0.isError, ctx_r0.isSuccess));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, ctx_r0.getFieldMessage()), " ");
  }
}
function FNInput_Conditional_0_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "span", 29);
    ɵɵelement(2, "fn-icon", 9);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 30)(4, "span", 31);
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "button", 32);
    ɵɵlistener("click", function FNInput_Conditional_0_For_10_Template_button_click_7_listener() {
      const toast_r18 = ɵɵrestoreView(_r17).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.removeToast(toast_r18.id));
    });
    ɵɵelement(8, "fn-icon", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const toast_r18 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMapInterpolate1("toast toast-", toast_r18.type, "");
    ɵɵclassProp("toast-enter", toast_r18.isVisible);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r0.getToastIconName(toast_r18))("variant", "Colour")("size", "medium")("color", toast_r18.type === "success" ? "#6cc24a" : toast_r18.type === "warn" ? "#ff9f00" : toast_r18.type === "error" ? "#ef3e42" : "#03182b");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 14, ctx_r0.getTranslatedMessage(toast_r18.message)), " ");
    ɵɵadvance(3);
    ɵɵproperty("name", "cross")("variant", "Line")("size", "medium")("color", "#ffffff");
  }
}
function FNInput_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, FNInput_Conditional_0_Conditional_1_Template, 1, 7, "fn-label", 2);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, FNInput_Conditional_0_Case_3_Template, 3, 19)(4, FNInput_Conditional_0_Case_4_Template, 11, 27)(5, FNInput_Conditional_0_Case_5_Template, 4, 28)(6, FNInput_Conditional_0_Case_6_Template, 7, 29);
    ɵɵelementContainerEnd();
    ɵɵtemplate(7, FNInput_Conditional_0_Conditional_7_Template, 4, 7, "div", 3);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 4);
    ɵɵrepeaterCreate(9, FNInput_Conditional_0_For_10_Template, 9, 16, "div", 5, _forTrack0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, ctx_r0.field.type !== "hidden" ? 1 : -1);
    ɵɵadvance(2);
    ɵɵconditional(3, (tmp_2_0 = ctx_r0.field.type) === "textarea" ? 3 : tmp_2_0 === "password" ? 4 : tmp_2_0 === "number" ? 5 : 6);
    ɵɵadvance(4);
    ɵɵconditional(7, ctx_r0.showFormFieldMessage(ctx_r0.control, ctx_r0.helperText) ? 7 : -1);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r0.toasts());
  }
}
var FN_TOAST_SERVICE = new InjectionToken("FN_TOAST_SERVICE");
var DEFAULT_CURRENCY_META = [{
  code: "USD",
  locale: "en-US",
  symbol: "$",
  digit: "1.2-2"
}, {
  code: "MYR",
  locale: "en-MY",
  symbol: "RM",
  digit: "1.2-2"
}, {
  code: "EUR",
  locale: "en-US",
  symbol: "€",
  digit: "1.2-2"
}, {
  code: "GBP",
  locale: "en-US",
  symbol: "£",
  digit: "1.2-2"
}, {
  code: "JPY",
  locale: "ja-JP",
  symbol: "¥",
  digit: "1.0-0"
}, {
  code: "CNY",
  locale: "zh-CN",
  symbol: "¥",
  digit: "1.2-2"
}, {
  code: "INR",
  locale: "en-IN",
  symbol: "₹",
  digit: "1.2-2"
}];
var FNInput = class _FNInput {
  cdr;
  field = {};
  helperHandle;
  toastService;
  injectedToastService = inject(FN_TOAST_SERVICE, {
    optional: true
  });
  get effectiveToastService() {
    return this.toastService || this.injectedToastService || void 0;
  }
  currencyMeta = DEFAULT_CURRENCY_META;
  defaultLocale = "en-US";
  form;
  valueChange = new EventEmitter();
  fieldBlur = new EventEmitter();
  translateService = inject(TranslateService);
  hasFocus = signal(false);
  textareaElement;
  // Internal Toast State
  toasts = signal([]);
  // Removed HttpClient injection
  subs = new Subscription();
  sizeMap = {
    extrasmall: 10,
    small: 16,
    medium: 20,
    large: 24,
    "x-large": 32,
    xxlarge: 48
  };
  getIconSizeName(size) {
    switch (size) {
      case 16:
        return "small";
      case 20:
        return "medium";
      case 24:
        return "large";
      case 32:
        return "x-large";
      default:
        return "medium";
    }
  }
  get isAlphanumeric() {
    return this.field.isAlphanumeric !== false;
  }
  get isEmailField() {
    return this.field.type === "email" || this.field.name?.toLowerCase().includes("email");
  }
  get alphanumericPattern() {
    if (this.field.isAddressLine) {
      return /[^A-Za-z0-9 \-_&(),/]/g;
    }
    return /[^A-Za-z0-9 \-_&()]/g;
  }
  isDisabled = false;
  control;
  isVisible = signal(true);
  // Track visibility state
  helperText = "";
  // Use a counter-based approach for unique IDs (safer than Math.random())
  static idCounter = 0;
  uniqueId = `fn-input-${++_FNInput.idCounter}`;
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {
    if (this.field.hidden) return;
    this.helperText = this.field.helperText ?? "";
    this.initFormControl();
    if (this.field.value) this.control.setValue(this.field.value);
    this.setupVisibilityCondition();
    this.setupFieldMessageListener();
    this.setupToastSubscription();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  setupFieldMessageListener() {
    if (!this.control) return;
    const val$ = this.control.valueChanges.pipe(startWith(this.control.value));
    const status$ = this.control.statusChanges.pipe(startWith(this.control.status));
    this.subs.add(merge(val$, status$).subscribe(() => {
      try {
        this.cdr.detectChanges();
      } catch (e) {
        console.warn("CDR detectChanges failed during field message update:", e);
        this.cdr.markForCheck();
      }
    }));
  }
  ngAfterViewInit() {
    this.autoResizeInitial();
    if (this.field.type === "textarea" && this.control?.value) {
      setTimeout(() => this.autoResizeInitial(), 30);
    }
    if (this.field.type === "number" && this.field.isCurrency && this.control?.value) {
      this.formatInitialCurrencyValue();
    }
  }
  enforceLowercase(event) {
    const input = event.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    input.value = input.value.toLowerCase();
    if (this.control) {
      this.control.setValue(input.value, {
        emitEvent: false
      });
    }
    this.valueChange.emit({
      name: this.field.name,
      value: input.value
    });
    input.setSelectionRange(start, end);
  }
  /**
   * Handle email input - allows only valid email characters and enforces lowercase.
   * Allowed: a-z, 0-9, . _ + - @
   * Rules:
   * - Only one @ allowed
   * - No consecutive dots (..)
   * - Automatic lowercase
   */
  handleEmailInput(event) {
    const input = event.target;
    const cursorPosition = input.selectionStart || 0;
    const originalValue = input.value;
    const lowerValue = originalValue.toLowerCase();
    const parts = lowerValue.split("@");
    let localPart = parts[0];
    let domainPart = parts.length > 1 ? parts.slice(1).join("") : null;
    localPart = localPart.replaceAll(/[^a-z0-9._+-]/g, "");
    while (localPart.startsWith(".")) {
      localPart = localPart.substring(1);
    }
    while (localPart.includes("..")) {
      localPart = localPart.replaceAll("..", ".");
    }
    let filteredValue = localPart;
    if (domainPart !== null) {
      domainPart = domainPart.replaceAll(/[^a-z0-9.-]/g, "");
      while (domainPart.startsWith("-")) {
        domainPart = domainPart.substring(1);
      }
      while (domainPart.includes("..")) {
        domainPart = domainPart.replaceAll("..", ".");
      }
      filteredValue += "@" + domainPart;
    }
    if (originalValue !== filteredValue) {
      const charsRemovedBeforeCursor = this.countRemovedCharsBeforeCursor(originalValue.toLowerCase(), filteredValue, cursorPosition);
      input.value = filteredValue;
      this.control.setValue(filteredValue, {
        emitEvent: false
      });
      const newCursorPos = Math.max(0, cursorPosition - charsRemovedBeforeCursor);
      input.setSelectionRange(newCursorPos, newCursorPos);
    } else if (originalValue !== lowerValue) {
      input.value = filteredValue;
      this.control.setValue(filteredValue, {
        emitEvent: false
      });
      input.setSelectionRange(cursorPosition, cursorPosition);
    }
    if (this.field.type === "password" && this.field.feedback) {
      this.checkPasswordStrength(filteredValue);
    }
    this.valueChange.emit({
      name: this.field.name,
      value: filteredValue
    });
    this.control.markAsTouched();
  }
  onFocus() {
    this.hasFocus.set(true);
  }
  formatInitialCurrencyValue() {
    const numericValue = Number(this.control.value);
    if (!Number.isNaN(numericValue)) {
      setTimeout(() => {
        const inputElement = document.getElementById(this.uniqueId);
        if (inputElement) {
          inputElement.value = this.formatCurrencyWithCommas(numericValue);
        }
      }, 50);
    }
  }
  initFormControl() {
    const controller = this.form.controls?.[this.field.name];
    this.control = controller;
    if (this.field.value) this.control.setValue(this.field.value);
    if (this.control) {
      if (this.field.disabled ?? false) {
        this.control?.disable();
      } else {
        this.control?.enable();
      }
    }
  }
  autoResizeInitial() {
    const textarea = this.textareaElement?.nativeElement;
    if (textarea) {
      const rows = this.field.rows || 1;
      const computedStyle = globalThis.getComputedStyle(textarea);
      const lineHeight = Number.parseFloat(computedStyle.lineHeight) || 32;
      const minHeight = rows * lineHeight;
      textarea.style.height = "auto";
      const newHeight = Math.max(textarea.scrollHeight, minHeight);
      textarea.style.height = newHeight + "px";
      textarea.style.overflow = "hidden";
    }
  }
  handleTextArea(event) {
    const element = event.target;
    const cursorPosition = element.selectionStart;
    const originalValue = element.value;
    if (this.field.type === "textarea" && this.isAlphanumeric) {
      const alphanumericPattern = this.alphanumericPattern;
      let filteredValue = originalValue.replaceAll(alphanumericPattern, "");
      if (filteredValue.startsWith(" ")) {
        filteredValue = filteredValue.trimStart();
      }
      filteredValue = filteredValue.replaceAll(/\s{2,}/g, " ");
      if (originalValue !== filteredValue) {
        const charsRemovedBeforeCursor = originalValue.length - filteredValue.length;
        element.value = filteredValue;
        this.control.setValue(filteredValue, {
          emitEvent: false
        });
        const newCursorPos = Math.max(0, (cursorPosition || 0) - charsRemovedBeforeCursor);
        element.setSelectionRange(newCursorPos, newCursorPos);
      }
      this.autoResizeInitial();
      this.valueChange.emit({
        name: this.field.name,
        value: filteredValue
      });
    } else {
      let filteredValue = originalValue;
      if (!this.isAlphanumeric) {
        console.log("isAlphanumeric", this.isAlphanumeric);
        const allowedPattern = /[^a-zA-Z0-9\s(){}[\];,."='+\-*/<>!&|%_@$?:]/g;
        filteredValue = filteredValue.replaceAll(allowedPattern, "");
      }
      if (filteredValue.startsWith(" ")) {
        filteredValue = filteredValue.trimStart();
      }
      filteredValue = filteredValue.replaceAll(/\s{2,}/g, " ");
      if (originalValue !== filteredValue) {
        const charsRemovedBeforeCursor = originalValue.length - filteredValue.length;
        element.value = filteredValue;
        this.control.setValue(filteredValue, {
          emitEvent: false
        });
        const newCursorPos = Math.max(0, (cursorPosition || 0) - charsRemovedBeforeCursor);
        element.setSelectionRange(newCursorPos, newCursorPos);
      }
      this.autoResizeInitial();
      this.valueChange.emit({
        name: this.field.name,
        value: filteredValue
      });
    }
    this.control.markAsTouched();
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  handleInput(event) {
    const target = event.target;
    const cursorPosition = target.selectionStart;
    const originalValue = target.value;
    let filteredValue = originalValue;
    if (!this.isAlphanumeric) {
      const allowedPattern = /[^a-zA-Z0-9\s(){}[\];,."='+\-*/<>!&|%_@$?:]/g;
      filteredValue = filteredValue.replaceAll(allowedPattern, "");
    }
    if (filteredValue.startsWith(" ")) {
      filteredValue = filteredValue.trimStart();
    }
    filteredValue = filteredValue.replaceAll(/\s{2,}/g, " ");
    if (originalValue !== filteredValue) {
      const charsRemovedBeforeCursor = originalValue.length - filteredValue.length;
      target.value = filteredValue;
      this.control.setValue(filteredValue, {
        emitEvent: false
      });
      const newCursorPos = Math.max(0, (cursorPosition || 0) - charsRemovedBeforeCursor);
      target.setSelectionRange(newCursorPos, newCursorPos);
    }
    if (this.field.type === "password" && this.field.feedback) {
      this.checkPasswordStrength(filteredValue);
    }
    this.valueChange.emit({
      name: this.field.name,
      value: filteredValue
    });
    this.control.markAsTouched();
  }
  /**
   * Handle alphanumeric input - allows only letters, numbers, and specific special characters
   * Allowed: A-Z, a-z, 0-9, space, hyphen, underscore, ampersand, and parentheses
   * Also prevents leading spaces and multiple consecutive spaces
   */
  handleAlphanumericInput(event) {
    const target = event.target;
    const cursorPosition = target.selectionStart;
    const originalValue = target.value;
    const alphanumericPattern = this.alphanumericPattern;
    let filteredValue = originalValue.replaceAll(alphanumericPattern, "");
    if (filteredValue.startsWith(" ")) {
      filteredValue = filteredValue.trimStart();
    }
    filteredValue = filteredValue.replaceAll(/\s{2,}/g, " ");
    if (originalValue !== filteredValue) {
      const charsRemovedBeforeCursor = originalValue.length - filteredValue.length;
      target.value = filteredValue;
      this.control.setValue(filteredValue, {
        emitEvent: false
      });
      const newCursorPos = Math.max(0, (cursorPosition || 0) - charsRemovedBeforeCursor);
      target.setSelectionRange(newCursorPos, newCursorPos);
    }
    if (this.field.type === "password" && this.field.feedback) {
      this.checkPasswordStrength(filteredValue);
    }
    this.valueChange.emit({
      name: this.field.name,
      value: filteredValue
    });
    this.control.markAsTouched();
  }
  handleBlur(e, maxDecimals = 2) {
    this.hasFocus.set(false);
    const target = e.target;
    const cleanValueString = target.value;
    if (!cleanValueString) {
      this.fieldBlur.emit({
        name: this.field.name,
        value: ""
      });
      this.cdr.detectChanges();
      return;
    }
    if (this.field.type === "text" || this.field.type === "textarea") {
      this.handleTextFieldBlur(target, cleanValueString);
    } else if (this.field.type === "number") {
      this.handleNumberFieldBlur(target, cleanValueString, maxDecimals);
    }
    this.fieldBlur.emit({
      name: this.field.name,
      value: target.value
    });
    this.cdr.detectChanges();
  }
  /**
   * Handle blur for text and textarea fields - trim trailing spaces
   */
  handleTextFieldBlur(target, cleanValueString) {
    const trimmed = cleanValueString.trim();
    if (cleanValueString !== trimmed) {
      target.value = trimmed;
      this.control.setValue(trimmed, {
        emitEvent: false
      });
    }
  }
  /**
   * Handle blur for number fields - validate and format
   */
  handleNumberFieldBlur(target, cleanValueString, maxDecimals) {
    const numString = cleanValueString.replaceAll(",", "");
    const isValidNumberFormat = /^-?\d+(\.\d+)?$/.test(numString);
    if (!isValidNumberFormat) {
      target.value = "";
      this.control.setValue("");
      return;
    }
    if (this.field.type === "number" && this.field.isCurrency) {
      this.processCurrencyValue(target, numString, maxDecimals);
    } else {
      target.value = numString;
    }
  }
  /**
   * Process currency value - handle formatting and decimal places
   */
  processCurrencyValue(target, numString, maxDecimals) {
    let processedValue = numString.startsWith("-") ? numString.substring(1) : numString;
    if (processedValue === "" || processedValue === "0") {
      processedValue = "0";
    }
    const cleanValueString = this.formatDecimalPlaces(processedValue, maxDecimals);
    const formattedValue = this.formatCurrencyWithCommas(cleanValueString, maxDecimals);
    this.control.setValue(cleanValueString, {
      emitEvent: false
    });
    this.control.updateValueAndValidity();
    this.control.markAsTouched();
    setTimeout(() => {
      target.value = formattedValue;
    }, 0);
  }
  /**
   * Format decimal places - pad or truncate to maxDecimals
   */
  formatDecimalPlaces(value, maxDecimals) {
    let [intPart, decPart] = value.includes(".") ? value.split(".") : [value, ""];
    if (decPart.length < maxDecimals) {
      decPart = decPart.padEnd(maxDecimals, "0");
    } else if (decPart.length > maxDecimals) {
      decPart = decPart.slice(0, maxDecimals);
    }
    return maxDecimals > 0 ? `${intPart}.${decPart}` : intPart;
  }
  handleNumberInput(event, maxDecimals = 2) {
    const target = event.target;
    const originalValue = target.value;
    const cursorPosition = target.selectionStart ?? 0;
    let value = this.filterNumericInput(target.value, maxDecimals);
    this.updateCursorPositionAfterFilter(target, originalValue, value, cursorPosition);
    this.updateFormControlValue(value, maxDecimals);
    this.valueChange.emit({
      name: this.field.name,
      value: target.value
    });
    this.control.markAsTouched();
  }
  /**
   * Filter numeric input to only allow digits and decimal point
   * Ensures only one decimal point and enforces max decimal places
   */
  filterNumericInput(value, maxDecimals) {
    let filtered = value.replaceAll(/[^0-9.]/g, "");
    filtered = this.filterDecimalPoints(filtered);
    filtered = this.enforceDecimalLimit(filtered, maxDecimals);
    return filtered;
  }
  /**
   * Ensure only one decimal point exists in the value
   */
  filterDecimalPoints(value) {
    const parts = value.split(".");
    if (parts.length > 2) {
      return parts[0] + "." + parts.slice(1).join("");
    }
    return value;
  }
  /**
   * Enforce maximum decimal places limit
   */
  enforceDecimalLimit(value, maxDecimals) {
    if (!value.includes(".")) {
      return value;
    }
    const [integerPart, decimalPart] = value.split(".");
    if (decimalPart && decimalPart.length > maxDecimals) {
      return integerPart + "." + decimalPart.slice(0, maxDecimals);
    }
    return value;
  }
  /**
   * Update cursor position after filtering input
   */
  updateCursorPositionAfterFilter(target, originalValue, newValue, cursorPosition) {
    if (target.value === newValue) {
      return;
    }
    const charsRemovedBeforeCursor = this.countRemovedCharsBeforeCursor(originalValue, newValue, cursorPosition);
    target.value = newValue;
    const newPosition = Math.max(0, cursorPosition - charsRemovedBeforeCursor);
    target.setSelectionRange(newPosition, newPosition);
  }
  /**
   * Update form control value and perform validation
   */
  updateFormControlValue(value, maxDecimals) {
    this.control.setValue(value, {
      emitEvent: false
    });
    this.validateIntegerDigits(value, maxDecimals);
    this.clearNumericError();
  }
  /**
   * Count how many characters were removed before the cursor position
   * This helps maintain correct cursor position after filtering input
   */
  countRemovedCharsBeforeCursor(original, filtered, cursorPos) {
    let removedCount = 0;
    let filteredIndex = 0;
    for (let i = 0; i < cursorPos && i < original.length; i++) {
      if (filteredIndex < filtered.length && original[i] === filtered[filteredIndex]) {
        filteredIndex++;
      } else {
        removedCount++;
      }
    }
    return removedCount;
  }
  /**
   * Handle paste event for number inputs
   * Prevents pasting of non-numeric characters and enforces digit limits
   */
  handleNumberPaste(event, maxDecimals = 2) {
    event.preventDefault();
    const target = event.target;
    const pastedText = event.clipboardData?.getData("text") || "";
    const isCurrency = this.field.type === "number" && !!this.field.isCurrency;
    const filteredText = isCurrency ? this.getFilteredCurrencyPastedText(pastedText) : this.getFilteredIntegerPastedText(pastedText);
    const finalValue = this.buildFinalPasteValue(target, filteredText, isCurrency, maxDecimals);
    target.value = finalValue;
    this.control.setValue(finalValue, {
      emitEvent: false
    });
    this.validateIntegerDigits(finalValue, maxDecimals);
    this.clearNumericError();
    this.valueChange.emit({
      name: this.field.name,
      value: finalValue
    });
    this.control.markAsTouched();
    this.setCursorAfterPaste(target, filteredText, finalValue);
  }
  /**
   * Filter pasted text for currency input (allows digits and decimal point)
   */
  getFilteredCurrencyPastedText(pastedText) {
    return pastedText.replaceAll(/[^0-9.]/g, "");
  }
  /**
   * Filter pasted text for integer-only input (allows digits only)
   */
  getFilteredIntegerPastedText(pastedText) {
    return pastedText.replaceAll(/\D/g, "");
  }
  /**
   * Build final value after paste operation
   */
  buildFinalPasteValue(target, filteredText, isCurrency, maxDecimals) {
    const currentValue = target.value;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    let finalValue;
    if (start === null || end === null || start === 0 && end === 0) {
      finalValue = filteredText;
    } else {
      finalValue = currentValue.substring(0, start) + filteredText + currentValue.substring(end);
    }
    return isCurrency ? this.applyDecimalRestrictions(finalValue, maxDecimals) : finalValue;
  }
  /**
   * Apply decimal restrictions for currency fields
   */
  applyDecimalRestrictions(value, maxDecimals) {
    let result = value;
    const parts = result.split(".");
    if (parts.length > 2) {
      result = parts[0] + "." + parts.slice(1).join("");
    }
    if (result.includes(".")) {
      const [intPart, decPart] = result.split(".");
      if (decPart.length > maxDecimals) {
        result = intPart + "." + decPart.slice(0, maxDecimals);
      }
    }
    return result;
  }
  /**
   * Validate integer digit limit and set/clear errors
   */
  validateIntegerDigits(value, maxDecimals) {
    if (this.field.type !== "number" || !this.field.maxIntegerDigits) {
      return;
    }
    const maxIntDigits = this.field.maxIntegerDigits ?? 15;
    const [intPart] = value.includes(".") ? value.split(".") : [value];
    if (intPart.length > maxIntDigits) {
      this.setMaxIntegerDigitsError(intPart.length, maxIntDigits, maxDecimals);
    } else {
      this.clearMaxIntegerDigitsError();
    }
  }
  /**
   * Set max integer digits error
   */
  setMaxIntegerDigitsError(actual, max, maxDecimals) {
    const currentErrors = this.control.errors || {};
    this.control.setErrors(__spreadProps(__spreadValues({}, currentErrors), {
      maxIntegerDigits: {
        actual,
        max,
        maxDecimals,
        message: `Please shorten your input to ${max} whole digits and ${maxDecimals} decimal or fewer.`
      }
    }));
  }
  /**
   * Clear max integer digits error if present
   */
  clearMaxIntegerDigitsError() {
    if (!this.control.hasError("maxIntegerDigits")) {
      return;
    }
    const errors = __spreadValues({}, this.control.errors);
    delete errors["maxIntegerDigits"];
    this.control.setErrors(Object.keys(errors).length ? errors : null);
  }
  /**
   * Clear numeric error if present
   */
  clearNumericError() {
    if (!this.control.hasError("numeric")) {
      return;
    }
    const errors = __spreadValues({}, this.control.errors);
    delete errors["numeric"];
    this.control.setErrors(Object.keys(errors).length ? errors : null);
  }
  /**
   * Set cursor position after paste operation
   */
  setCursorAfterPaste(target, filteredText, finalValue) {
    if (target.type === "number") {
      return;
    }
    const start = target.selectionStart || 0;
    const newCursorPos = start + filteredText.length;
    const actualPos = Math.min(newCursorPos, finalValue.length);
    target.setSelectionRange(actualPos, actualPos);
  }
  // Format number with comma separators
  // Uses string-based formatting for large numbers to preserve precision
  formatCurrencyWithCommas(value, maxDecimals = 2) {
    if (this.field.type !== "number" || !this.field.isCurrency) return value.toString();
    const strValue = value.toString();
    if (!strValue || strValue === "NaN") return "";
    const [integerPart, decimalPart] = strValue.includes(".") ? strValue.split(".") : [strValue, ""];
    let formattedInteger = "";
    const len = integerPart.length;
    for (let i = 0; i < len; i++) {
      if (i > 0 && (len - i) % 3 === 0) {
        formattedInteger += ",";
      }
      formattedInteger += integerPart[i];
    }
    let formattedDecimal = decimalPart || "";
    if (formattedDecimal.length < maxDecimals) {
      formattedDecimal = formattedDecimal.padEnd(maxDecimals, "0");
    } else if (formattedDecimal.length > maxDecimals) {
      formattedDecimal = formattedDecimal.slice(0, maxDecimals);
    }
    return maxDecimals > 0 ? `${formattedInteger}.${formattedDecimal}` : formattedInteger;
  }
  handleNumberKeydown(event, isCurrency) {
    if (isCurrency) return;
    if (["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight"].includes(event.key)) {
      return;
    }
    if (event.ctrlKey || event.metaKey) {
      return;
    }
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }
  // Get locale from currency code using currencyMeta
  getLocaleFromCurrency(currencyCode) {
    const currencyObj = this.currencyMeta.find((c) => c.code === currencyCode);
    return currencyObj?.locale || this.defaultLocale;
  }
  showPassword = false;
  passwordStrengthLabel = "";
  strengthClass = "";
  passwordStrengthPercent = 0;
  isPasswordFocused = false;
  onPasswordFocus() {
    this.hasFocus.set(true);
    this.isPasswordFocused = true;
    this.cdr.detectChanges();
  }
  onPasswordBlur() {
    this.isPasswordFocused = false;
    this.cdr.detectChanges();
  }
  handlePasswordBlur(e) {
    this.handleBlur(e);
    this.onPasswordBlur();
  }
  checkPasswordStrength(value) {
    if (!value || this.field.type !== "password") {
      this.passwordStrengthLabel = "";
      this.strengthClass = "";
      this.passwordStrengthPercent = 0;
      return;
    }
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/\d/.test(value)) score++;
    if (/[\W_]/.test(value)) score++;
    if (score <= 1) {
      this.passwordStrengthLabel = this.field.weakLabel || "Weak";
      this.strengthClass = "text-[var(--RHB-Red-100)]";
      this.passwordStrengthPercent = 25;
    } else if (score === 2 || score === 3) {
      this.passwordStrengthLabel = this.field.mediumLabel || "Medium";
      this.strengthClass = "text-[var(--Orange-100)]";
      this.passwordStrengthPercent = score === 2 ? 50 : 75;
    } else {
      this.passwordStrengthLabel = this.field.strongLabel || "Strong";
      this.strengthClass = "text-[var(--Green-100)]";
      this.passwordStrengthPercent = 100;
    }
  }
  increment() {
    if (this.field.type !== "number") return;
    const step = this.field.step || 1;
    const current = Number(this.control.value) || 0;
    let nextValue = current + step;
    if (typeof this.field.max === "number") {
      nextValue = Math.min(nextValue, this.field.max);
    }
    this.control.setValue(nextValue);
    this.control.markAsTouched();
    this.valueChange.emit({
      name: this.field.name,
      value: nextValue
    });
    if (this.field.isCurrency) {
      setTimeout(() => {
        const inputElement = document.getElementById(this.uniqueId);
        if (inputElement) {
          inputElement.value = this.formatCurrencyWithCommas(nextValue);
        }
      });
    }
  }
  decrement() {
    if (this.field.type !== "number") return;
    const step = this.field.step || 1;
    const current = Number(this.control.value) || 0;
    let nextValue = current - step;
    const minValue = Math.max(this.field.min || 0, 0);
    nextValue = Math.max(nextValue, minValue);
    this.control.setValue(nextValue);
    this.control.markAsTouched();
    this.valueChange.emit({
      name: this.field.name,
      value: nextValue
    });
    if (this.field.isCurrency) {
      setTimeout(() => {
        const inputElement = document.getElementById(this.uniqueId);
        if (inputElement) {
          inputElement.value = this.formatCurrencyWithCommas(nextValue);
        }
      });
    }
  }
  copyText(e) {
    e.stopPropagation();
    if (!this.control.value) return;
    navigator.clipboard.writeText(this.control.value).then(() => {
      const service = this.effectiveToastService;
      if (service) {
        service.success("Copied to clipboard", "Success", 2e3);
      }
    });
  }
  prefixClick(e) {
    if (this.field.prefix?.onClick) {
      this.field.prefix.onClick(e);
    }
  }
  suffixClick(e) {
    if (this.field.suffix?.onClick) {
      this.field.suffix.onClick(e);
    }
  }
  /**
   * Set up visibility condition listener
   * Watches the dependent field and shows/hides this field based on conditions
   */
  setupVisibilityCondition() {
    if (!this.field.visibilityCondition || !this.form) return;
    const {
      dependsOn
    } = this.field.visibilityCondition;
    const dependentControl = this.form.get(dependsOn);
    if (!dependentControl) {
      return;
    }
    this.updateVisibility(dependentControl.value);
    dependentControl.valueChanges.subscribe((value) => {
      this.updateVisibility(value);
    });
  }
  /**
   * Update field visibility based on dependent field value
   */
  updateVisibility(dependentValue) {
    if (!this.field.visibilityCondition) return;
    const {
      showWhen,
      hideWhen
    } = this.field.visibilityCondition;
    let shouldBeVisible = false;
    if (showWhen !== void 0) {
      if (Array.isArray(showWhen)) {
        shouldBeVisible = showWhen.includes(dependentValue);
      } else {
        shouldBeVisible = dependentValue === showWhen;
      }
    }
    if (hideWhen !== void 0) {
      const shouldHide = Array.isArray(hideWhen) ? hideWhen.includes(dependentValue) : dependentValue === hideWhen;
      if (shouldHide) {
        shouldBeVisible = false;
      }
    }
    this.isVisible.set(shouldBeVisible);
    if (!shouldBeVisible && this.control && !this.control.value) {
      this.control.setValue(null);
      this.control.markAsUntouched();
      this.control.updateValueAndValidity();
    }
    this.cdr.detectChanges();
  }
  setupToastSubscription() {
    const service = this.effectiveToastService;
    if (service) {
      this.subs.add(service.toasts$.subscribe((toasts) => {
        this.toasts.set(toasts);
      }));
    }
  }
  removeToast(id) {
    this.effectiveToastService?.remove(id);
  }
  getTranslatedMessage(message) {
    if (this.helperHandle && typeof this.helperHandle.translate === "function") {
      return this.helperHandle.translate(message);
    }
    return message;
  }
  getToastIconName(toast) {
    switch (toast.type) {
      case "success":
        return "check-circle";
      case "warn":
      case "info":
        return "info-circle";
      case "error":
        return "exclamation-circle";
      default:
        return "info-circle";
    }
  }
  showFormFieldMessage(control, helperText) {
    if (this.helperHandle) {
      return this.helperHandle.showFormFieldMessage(control, helperText);
    }
    const isError = control?.touched && !!control?.errors;
    const isHelper = !isError && Boolean(helperText ?? "");
    return isError || isHelper;
  }
  getTranslatedLabel(label) {
    if (!label) return "";
    try {
      const labelStr = label.toString();
      return labelStr.split("::").map((part) => part.trim()).filter((part) => !!part).map((part) => this.translateService.instant(part)).join(" ") + this.getEndSymbol(labelStr);
    } catch (e) {
      console.warn("Translation failed in getTranslatedLabel:", label, e);
      return label;
    }
  }
  getEndSymbol(label) {
    return label.toString().includes("required") && label.toString().includes("FNFieldMessage") ? "." : "";
  }
  // Removed getIconPath as HTTP loading is disabled
  // --- MESSAGE LOGIC ---
  getFieldMessage() {
    if (!this.control) return this.field?.helperText || "";
    if (this.control.touched && this.control.errors) {
      for (const key of Object.keys(this.control.errors)) {
        const errorValue = this.control.errors[key];
        if (errorValue && typeof errorValue === "object" && errorValue.message) {
          return errorValue.message;
        }
        if (this.field?.errors?.[key]) {
          return this.field.errors[key];
        }
      }
      return this.field?.errors?.["default"] || "Please enter " + this.translateService.instant(this.field?.label);
    }
    return this.field?.helperText || "";
  }
  get isError() {
    return !!(this.control?.touched && this.control?.errors);
  }
  get isSuccess() {
    return !!(this.control?.valid && this.control?.touched);
  }
  static ɵfac = function FNInput_Factory(t) {
    return new (t || _FNInput)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FNInput,
    selectors: [["fn-input"]],
    viewQuery: function FNInput_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.textareaElement = _t.first);
      }
    },
    inputs: {
      field: "field",
      helperHandle: "helperHandle",
      toastService: "toastService",
      currencyMeta: "currencyMeta",
      defaultLocale: "defaultLocale",
      form: "form"
    },
    outputs: {
      valueChange: "valueChange",
      fieldBlur: "fieldBlur"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [["fnTextarea", ""], [1, "fn-input-container"], [3, "for", "label", "required", "hideOptional", "color", "variant", "statusLabel"], [1, "fn-field-message-container"], [1, "toast-container"], [3, "class", "toast-enter"], [1, "fn-input-field", 2, "resize", "none", 3, "input", "blur", "focus", "name", "id", "required", "placeholder", "disabled", "rows", "readonly", "formControl", "ngClass", "ngStyle"], [1, "relative", "w-full"], [1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "pl-3", "flex", "items-center", "gap-2", 2, "z-index", "1"], [3, "name", "variant", "size", "color"], [1, "text-sm", "font-medium", "whitespace-nowrap", 3, "ngStyle", "cursor-pointer"], [1, "fn-input-field", "overflow-hidden", "text-ellipsis", 3, "input", "focus", "blur", "type", "id", "required", "disabled", "formControl", "placeholder", "readonly", "ngClass", "ngStyle"], [1, "absolute", "right-0", "top-1/2", "-translate-y-1/2", "flex", "items-center", "pr-3", "gap-2"], [1, "cursor-pointer"], [1, "mt-2", "space-y-1"], [1, "text-sm", "font-medium", "whitespace-nowrap", 3, "click", "keydown.enter", "ngStyle"], [1, "cursor-pointer", 3, "click", "keydown"], [3, "name", "color"], [1, "cursor-pointer", 3, "ngClass"], [1, "cursor-pointer", 3, "click", "keydown", "ngClass"], [1, "flex", "items-center", "justify-between", "text-xs"], [1, "font-medium", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], [1, "h-1.5", "w-full", "bg-[#eef0f2]", "rounded-full", "overflow-hidden"], [1, "h-full", "transition-all", "duration-300", "rounded-full", 3, "ngClass"], [1, "fn-input-field", 3, "input", "paste", "blur", "keydown", "focus", "type", "name", "id", "required", "placeholder", "disabled", "readOnly", "formControl", "min", "max", "step", "ngClass", "ngStyle"], [1, "relative", "z-0"], [1, "fn-input-field", 3, "input", "blur", "focus", "type", "name", "id", "required", "placeholder", "disabled", "readOnly", "formControl", "ngClass", "ngStyle"], [1, "fn-field-message-text", 3, "ngClass"], [1, "toast-icon"], [1, "toast-content"], [1, "toast-message"], ["aria-label", "Close", 1, "toast-close", 3, "click"]],
    template: function FNInput_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, FNInput_Conditional_0_Template, 11, 3);
      }
      if (rf & 2) {
        ɵɵconditional(0, ctx.field.name && ctx.isVisible() && !ctx.field.hidden ? 0 : -1);
      }
    },
    dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, CommonModule, NgClass, NgStyle, ReactiveFormsModule, FormControlDirective, TranslateModule, TranslatePipe, FNLabel, FNIconComponent],
    styles: [".fn-input-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.fn-label[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-weight:500;margin-bottom:8px;display:flex;align-items:center}.fn-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#c4cdd2;font-size:14px;font-weight:400}.fn-input-field[_ngcontent-%COMP%]{width:100%;height:48px;padding:0 16px;background-color:#f7f8f9;border-bottom:1.5px solid #c4cdd2;font-family:Outfit,sans-serif;font-size:16px;color:#03182b;transition:all .2s ease;border-radius:4px 4px 0 0}.fn-input-field[_ngcontent-%COMP%]::placeholder{color:#c4cdd2}.fn-input-field[_ngcontent-%COMP%]:focus{outline:none;background-color:#fff;border-bottom-color:#03182b}.fn-input-field.error[_ngcontent-%COMP%]{border-bottom-color:#ef3e42}.fn-input-field.success[_ngcontent-%COMP%]{border-bottom-color:#6cc24a}.fn-input-field.disabled[_ngcontent-%COMP%]{background-color:#eef0f2;color:#c4cdd2;cursor:not-allowed}.fn-input-field.pl-10[_ngcontent-%COMP%]{padding-left:40px!important}.fn-input-field.has-prefix-text[_ngcontent-%COMP%]{padding-left:100px!important}.fn-input-field.pr-10[_ngcontent-%COMP%]{padding-right:40px!important}.fn-input-field.has-suffix-text[_ngcontent-%COMP%]{padding-right:120px!important}.fn-input-field.pr-12[_ngcontent-%COMP%]{padding-right:44px!important}.fn-input-field.pr-20[_ngcontent-%COMP%]{padding-right:72px!important}.fn-input-field.pr-24[_ngcontent-%COMP%]{padding-right:88px!important}.fn-input-field.pr-30[_ngcontent-%COMP%]{padding-right:104px!important}.fn-input-field.pr-32[_ngcontent-%COMP%]{padding-right:120px!important}.fn-field-message-container[_ngcontent-%COMP%]{margin-top:4px}.fn-field-message-text[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:12px;color:#c4cdd2}.fn-field-message-text.error[_ngcontent-%COMP%]{color:#ef3e42}.fn-field-message-text.success[_ngcontent-%COMP%]{color:#6cc24a}.icon-container[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px}.relative[_ngcontent-%COMP%]{position:relative}.absolute[_ngcontent-%COMP%]{position:absolute}.right-0[_ngcontent-%COMP%]{right:0}.left-0[_ngcontent-%COMP%]{left:0}.top-1\\/2[_ngcontent-%COMP%]{top:50%}.-translate-y-1\\/2[_ngcontent-%COMP%]{transform:translateY(-50%)}.flex[_ngcontent-%COMP%]{display:flex}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-1[_ngcontent-%COMP%]{gap:.25rem}.gap-2[_ngcontent-%COMP%]{gap:.5rem}.pr-3[_ngcontent-%COMP%]{padding-right:.75rem}.pl-3[_ngcontent-%COMP%]{padding-left:.75rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.space-y-1[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){margin-top:.25rem}.text-xs[_ngcontent-%COMP%]{font-size:.75rem}.font-medium[_ngcontent-%COMP%]{font-weight:500}.h-1\\.5[_ngcontent-%COMP%]{height:.375rem}.w-full[_ngcontent-%COMP%]{width:100%}.bg-\\__ph-0__[_ngcontent-%COMP%]{background-color:#eef0f2}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.overflow-hidden[_ngcontent-%COMP%]{overflow:hidden}.transition-all[_ngcontent-%COMP%]{transition-property:all}.duration-300[_ngcontent-%COMP%]{transition-duration:.3s}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.opacity-50[_ngcontent-%COMP%]{opacity:.5}.cursor-not-allowed[_ngcontent-%COMP%]{cursor:not-allowed}.text-ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis}.whitespace-nowrap[_ngcontent-%COMP%]{white-space:nowrap}.toast-container[_ngcontent-%COMP%]{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast[_ngcontent-%COMP%]{display:flex;align-items:center;background:#25333f;border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.toast.toast-success[_ngcontent-%COMP%]{border-left:4px solid #6cc24a}.toast.toast-warn[_ngcontent-%COMP%]{border-left:4px solid #ff9f00}.toast.toast-error[_ngcontent-%COMP%]{border-left:4px solid #ef3e42}.toast.toast-info[_ngcontent-%COMP%]{border-left:4px solid #3b82f6}.toast[_ngcontent-%COMP%]   .toast-icon[_ngcontent-%COMP%]{width:24px;height:24px;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0}.toast[_ngcontent-%COMP%]   .toast-content[_ngcontent-%COMP%]{flex:1;min-width:0}.toast[_ngcontent-%COMP%]   .toast-message[_ngcontent-%COMP%]{font-size:14px;line-height:20px;color:#fff;display:block}.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%]{background:none;border:none;font-size:20px;color:#fff;opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast[_ngcontent-%COMP%]   .toast-close[_ngcontent-%COMP%]:hover{opacity:1}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNInput, [{
    type: Component,
    args: [{
      selector: "fn-input",
      standalone: true,
      imports: [FormsModule, CommonModule, ReactiveFormsModule, TranslateModule, FNLabel, FNIconComponent],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `@if (field.name && isVisible() && !field.hidden) {\r
  <div class="fn-input-container">\r
    @if (field.type! !== 'hidden') {\r
      <fn-label\r
        [for]="uniqueId"\r
        [label]="field.label"\r
        [required]="field.required || false"\r
        [hideOptional]="field.hideOptional || false"\r
        [color]="field.color || '#03182b'"\r
        [variant]="field.labelVariant || 'p1'"\r
        [statusLabel]="field.statusLabel"\r
      ></fn-label>\r
    }\r
\r
    <ng-container>\r
      @switch (field.type) {\r
        <!-- Textarea Field -->\r
        @case ('textarea') {\r
          <textarea\r
            #fnTextarea\r
            style="resize: none"\r
            [name]="field.name"\r
            [id]="uniqueId"\r
            [required]="field.required || false"\r
            [placeholder]="field.placeholder || '' | translate"\r
            [disabled]="field.disabled || false"\r
            [rows]="field.rows || 1"\r
            [readonly]="field.readOnly || false"\r
            [formControl]="control"\r
            (input)="handleTextArea($event)"\r
            (blur)="handleBlur($event)"\r
            class="fn-input-field"\r
            [ngClass]="{\r
              disabled: control.disabled || field.readOnly,\r
              error: control.touched && control.errors,\r
              success: field['hasSuccessBorder'] && control.valid && !control.errors,\r
            }"\r
            [ngStyle]="{\r
              color: field.valueColor || 'inherit',\r
              'font-size': field.valueSize || '',\r
            }"\r
            (focus)="onFocus()"\r
          ></textarea>\r
        }\r
\r
        <!-- Password Field -->\r
        @case ('password') {\r
          <div class="relative w-full">\r
            <div\r
              class="absolute left-0 top-1/2 -translate-y-1/2 pl-3 flex items-center gap-2"\r
              style="z-index: 1"\r
            >\r
              @if (field.prefix?.icon) {\r
                <fn-icon\r
                  [name]="field.prefix?.icon || ''"\r
                  [variant]="'Line'"\r
                  [size]="'medium'"\r
                  [color]="control.disabled ? '#c4cdd2' : '#03182b'"\r
                ></fn-icon>\r
              }\r
              @if (field.prefix?.text) {\r
                <span\r
                  class="text-sm font-medium whitespace-nowrap"\r
                  [ngStyle]="{ color: control.disabled ? '#c4cdd2' : '#03182b' }"\r
                  (click)="prefixClick($event)"\r
                  (keydown.enter)="prefixClick($event)"\r
                  [attr.tabindex]="field.prefix?.onClick ? 0 : null"\r
                  [class.cursor-pointer]="!!field.prefix?.onClick"\r
                  >{{ field.prefix!.text }}</span\r
                >\r
              }\r
            </div>\r
            <input\r
              [type]="showPassword ? 'text' : 'password'"\r
              [id]="uniqueId"\r
              [required]="field.required || false"\r
              [disabled]="field.disabled || false"\r
              [formControl]="control"\r
              [placeholder]="field.placeholder || '' | translate"\r
              [readonly]="field.readOnly || false"\r
              (input)="isAlphanumeric ? handleAlphanumericInput($event) : handleInput($event)"\r
              (focus)="onPasswordFocus()"\r
              (blur)="handlePasswordBlur($event)"\r
              class="fn-input-field overflow-hidden text-ellipsis"\r
              [ngClass]="{\r
                disabled: control.disabled || field.readOnly,\r
                error: control.touched && control.errors,\r
                success: field['hasSuccessBorder'] && control.valid,\r
                'pl-10': field.prefix?.icon && !field.prefix?.text,\r
                'has-prefix-text': !!field.prefix?.text,\r
                'pr-12':\r
                  (field.toggleMask && !field.isCopyText) ||\r
                  (!field.toggleMask && field.isCopyText),\r
                'pr-24': field.toggleMask && field.isCopyText && !field.hasGenerateKey,\r
                'pr-32': field.toggleMask && field.isCopyText && field.hasGenerateKey,\r
              }"\r
              [ngStyle]="{\r
                color: field.valueColor || 'inherit',\r
                'font-size': field.valueSize || '',\r
              }"\r
            />\r
\r
            <div class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-3 gap-2">\r
              @if (field.toggleMask && !field.isCopyText) {\r
                <span\r
                  class="cursor-pointer"\r
                  (click)="togglePasswordVisibility()"\r
                  (keydown)="togglePasswordVisibility()"\r
                >\r
                  <fn-icon\r
                    [name]="showPassword ? 'eye-open' : 'eye-close'"\r
                    [variant]="'Line'"\r
                    [size]="'large'"\r
                    [color]="'#03182b'"\r
                  ></fn-icon>\r
                </span>\r
              } @else if (field.isCopyText && !field.toggleMask) {\r
                <span\r
                  class="cursor-pointer"\r
                  (click)="copyText($event)"\r
                  (keydown)="copyText($event)"\r
                >\r
                  <fn-icon [name]="'two-square'" [color]="'#03182b'"></fn-icon>\r
                </span>\r
                @if (field.hasGenerateKey) {\r
                  <span\r
                    class="cursor-pointer"\r
                    (click)="field.onGenerateKey && field.onGenerateKey()"\r
                    (keydown)="field.onGenerateKey && field.onGenerateKey()"\r
                  >\r
                    <fn-icon\r
                      [name]="'round-arrow-top-left'"\r
                      [variant]="'Line'"\r
                      [size]="'large'"\r
                      [color]="'#03182b'"\r
                    ></fn-icon>\r
                  </span>\r
                }\r
              } @else if (field.toggleMask && field.isCopyText) {\r
                <span\r
                  class="cursor-pointer"\r
                  (click)="togglePasswordVisibility()"\r
                  (keydown)="togglePasswordVisibility()"\r
                >\r
                  <fn-icon\r
                    [name]="showPassword ? 'eye-open' : 'eye-close'"\r
                    [variant]="'Line'"\r
                    [size]="'large'"\r
                    [color]="'#03182b'"\r
                  ></fn-icon>\r
                </span>\r
                <span\r
                  class="cursor-pointer"\r
                  (click)="copyText($event)"\r
                  (keydown)="copyText($event)"\r
                >\r
                  <fn-icon [name]="'two-square'" [color]="'#03182b'"></fn-icon>\r
                </span>\r
                @if (field.hasGenerateKey) {\r
                  <span\r
                    class="cursor-pointer"\r
                    (click)="field.onGenerateKey && field.onGenerateKey()"\r
                    (keydown)="field.onGenerateKey && field.onGenerateKey()"\r
                    [ngClass]="{ 'opacity-50 cursor-not-allowed': !control.value }"\r
                  >\r
                    <fn-icon [name]="'round-arrow-top-left'" [color]="'#03182b'"></fn-icon>\r
                  </span>\r
                }\r
              }\r
            </div>\r
          </div>\r
\r
          @if (field.feedback && isPasswordFocused) {\r
            <div class="mt-2 space-y-1">\r
              <div class="flex items-center justify-between text-xs">\r
                <span class="font-medium" [ngClass]="strengthClass">\r
                  {{ passwordStrengthLabel | translate }}\r
                </span>\r
                <div class="flex items-center gap-1">\r
                  <fn-icon\r
                    [name]="passwordStrengthPercent > 50 ? 'check-circle' : 'info-circle'"\r
                    [variant]="'Line'"\r
                    [size]="'extrasmall'"\r
                    [color]="\r
                      passwordStrengthPercent <= 25\r
                        ? '#ef3e42'\r
                        : passwordStrengthPercent <= 75\r
                          ? '#ff9f00'\r
                          : '#6cc24a'\r
                    "\r
                  ></fn-icon>\r
                </div>\r
              </div>\r
              <div class="h-1.5 w-full bg-[#eef0f2] rounded-full overflow-hidden">\r
                <div\r
                  class="h-full transition-all duration-300 rounded-full"\r
                  [ngClass]="{\r
                    'bg-[#ef3e42]': passwordStrengthPercent <= 25,\r
                    'bg-[#ff9f00]': passwordStrengthPercent > 25 && passwordStrengthPercent <= 75,\r
                    'bg-[#6cc24a]': passwordStrengthPercent > 75,\r
                  }"\r
                  [style.width.%]="passwordStrengthPercent"\r
                ></div>\r
              </div>\r
            </div>\r
          }\r
        }\r
\r
        <!-- Number Field -->\r
        @case ('number') {\r
          <div class="relative w-full">\r
            @if (field.prefix?.icon || field.prefix?.text) {\r
              <div\r
                class="absolute left-0 top-1/2 -translate-y-1/2 pl-3 flex items-center gap-2"\r
                style="z-index: 1"\r
              >\r
                @if (field.prefix?.icon) {\r
                  <fn-icon\r
                    [name]="field.prefix?.icon || ''"\r
                    [variant]="'Line'"\r
                    [size]="'medium'"\r
                    [color]="control.disabled ? '#c4cdd2' : '#03182b'"\r
                  ></fn-icon>\r
                }\r
                @if (field.prefix?.text) {\r
                  <span\r
                    class="text-sm font-medium whitespace-nowrap"\r
                    [ngStyle]="{ color: control.disabled ? '#c4cdd2' : '#03182b' }"\r
                    (click)="prefixClick($event)"\r
                    (keydown.enter)="prefixClick($event)"\r
                    [attr.tabindex]="field.prefix?.onClick ? 0 : null"\r
                    [class.cursor-pointer]="!!field.prefix?.onClick"\r
                    >{{ field.prefix!.text }}</span\r
                  >\r
                }\r
              </div>\r
            }\r
            <input\r
              [type]="field.type === 'number' && field.isCurrency ? 'text' : 'number'"\r
              [name]="field.name"\r
              [id]="uniqueId"\r
              [required]="field.required || false"\r
              [placeholder]="field.placeholder || '' | translate"\r
              [disabled]="isDisabled || false"\r
              [readOnly]="field.readOnly || false"\r
              [formControl]="control"\r
              [min]="field.type === 'number' && !field.isCurrency ? 0 : null"\r
              [max]="field.type === 'number' && !field.isCurrency ? field.max : null"\r
              [step]="field.type === 'number' && !field.isCurrency ? field.step || 1 : null"\r
              (input)="handleNumberInput($event, field.minFractionDigits || 2)"\r
              (paste)="handleNumberPaste($event, field.minFractionDigits || 2)"\r
              (blur)="handleBlur($event, field.minFractionDigits || 2)"\r
              (keydown)="handleNumberKeydown($event, field.isCurrency || false)"\r
              class="fn-input-field"\r
              [ngClass]="{\r
                disabled: control.disabled || field.readOnly,\r
                error: control.touched && control.errors,\r
                success: field['hasSuccessBorder'] && control.valid && !control.errors,\r
                'pl-10': field.prefix?.icon && !field.prefix?.text,\r
                'has-prefix-text': !!field.prefix?.text,\r
                'pr-10': field.suffix?.icon && !field.suffix?.text,\r
                'has-suffix-text': !!field.suffix?.text,\r
                'text-[24px] font-bold': field.isCurrency,\r
              }"\r
              [ngStyle]="{\r
                color: field.valueColor || 'inherit',\r
                'font-size': field.valueSize || '',\r
              }"\r
              (focus)="onFocus()"\r
            />\r
          </div>\r
        }\r
\r
        <!-- Default Input Field (text, email, etc.) -->\r
        @default {\r
          <div class="relative z-0">\r
            @if (field.prefix?.icon || field.prefix?.text) {\r
              <div\r
                class="absolute left-0 top-1/2 -translate-y-1/2 pl-3 flex items-center gap-2"\r
                style="z-index: 1"\r
              >\r
                @if (field.prefix?.icon) {\r
                  <fn-icon\r
                    [name]="field.prefix?.icon || ''"\r
                    [variant]="'Line'"\r
                    [size]="'medium'"\r
                    [color]="control.disabled ? '#c4cdd2' : '#03182b'"\r
                  ></fn-icon>\r
                }\r
                @if (field.prefix?.text) {\r
                  <span\r
                    class="text-sm font-medium whitespace-nowrap"\r
                    [ngStyle]="{ color: control.disabled ? '#c4cdd2' : '#03182b' }"\r
                    (click)="prefixClick($event)"\r
                    (keydown.enter)="prefixClick($event)"\r
                    [attr.tabindex]="field.prefix?.onClick ? 0 : null"\r
                    [class.cursor-pointer]="!!field.prefix?.onClick"\r
                    >{{ field.prefix!.text }}</span\r
                  >\r
                }\r
              </div>\r
            }\r
            <input\r
              [type]="field.type"\r
              [name]="field.name"\r
              [id]="uniqueId"\r
              [required]="field.required || false"\r
              [placeholder]="field.placeholder || '' | translate"\r
              [disabled]="field.disabled || false"\r
              [readOnly]="field.readOnly || false"\r
              [formControl]="control"\r
              (input)="\r
                isEmailField\r
                  ? handleEmailInput($event)\r
                  : field.type === 'text' && isAlphanumeric\r
                    ? handleAlphanumericInput($event)\r
                    : handleInput($event)\r
              "\r
              (blur)="handleBlur($event)"\r
              class="fn-input-field"\r
              [ngClass]="{\r
                disabled: control.disabled || field.readOnly,\r
                error: control.touched && control.errors,\r
                success: field['hasSuccessBorder'] && control.valid && !control.errors,\r
                'pl-10': field.prefix?.icon && !field.prefix?.text,\r
                'has-prefix-text': !!field.prefix?.text,\r
                'pr-10':\r
                  (field.icon || field.suffix?.icon) && !field.isCopyText && !field.suffix?.text,\r
                'has-suffix-text': !!field.suffix?.text,\r
                'pr-20':\r
                  field.isCopyText && !field.hasGenerateKey && !(field.icon || field.suffix?.icon),\r
                'pr-30':\r
                  field.isCopyText && field.hasGenerateKey && !(field.icon || field.suffix?.icon),\r
                'pr-32':\r
                  field.isCopyText && field.hasGenerateKey && (field.icon || field.suffix?.icon),\r
              }"\r
              [ngStyle]="{\r
                color: field.valueColor || 'inherit',\r
                'font-size': field.valueSize || '',\r
              }"\r
              (focus)="onFocus()"\r
            />\r
\r
            <div class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pr-3 gap-2">\r
              @if (field.isCopyText) {\r
                <span\r
                  class="cursor-pointer"\r
                  (click)="copyText($event)"\r
                  (keydown)="copyText($event)"\r
                >\r
                  <fn-icon [name]="'two-square'" [color]="'#03182b'"></fn-icon>\r
                </span>\r
                @if (field.hasGenerateKey) {\r
                  <span\r
                    class="cursor-pointer"\r
                    (click)="field.onGenerateKey && field.onGenerateKey()"\r
                    (keydown)="field.onGenerateKey && field.onGenerateKey()"\r
                  >\r
                    <fn-icon [name]="'round-arrow-top-left'" [color]="'#03182b'"></fn-icon>\r
                  </span>\r
                }\r
              }\r
\r
              @if (field.icon || field.suffix?.icon || field.suffix?.text) {\r
                @if (field.suffix?.text) {\r
                  <span\r
                    class="text-sm font-medium whitespace-nowrap"\r
                    [ngStyle]="{ color: control.disabled ? '#c4cdd2' : '#03182b' }"\r
                    (click)="suffixClick($event)"\r
                    (keydown.enter)="suffixClick($event)"\r
                    [attr.tabindex]="field.suffix?.onClick ? 0 : null"\r
                    [class.cursor-pointer]="!!field.suffix?.onClick"\r
                    >{{ field.suffix!.text }}</span\r
                  >\r
                }\r
                @if (field.icon || field.suffix?.icon) {\r
                  <fn-icon\r
                    [name]="field.suffix?.icon || field.icon?.name || ''"\r
                    [variant]="field.icon?.variant || 'Line'"\r
                    [size]="field.icon ? getIconSizeName(field.icon.size) : 'medium'"\r
                    [color]="control.disabled ? '#c4cdd2' : '#03182b'"\r
                  ></fn-icon>\r
                }\r
              }\r
            </div>\r
          </div>\r
        }\r
      }\r
    </ng-container>\r
\r
    @if (showFormFieldMessage(control, helperText)) {\r
      <div class="fn-field-message-container">\r
        <span\r
          class="fn-field-message-text"\r
          [ngClass]="{\r
            error: isError,\r
            success: isSuccess,\r
          }"\r
        >\r
          {{ getFieldMessage() | translate }}\r
        </span>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- Integrated Toast Notifications -->\r
  <div class="toast-container">\r
    @for (toast of toasts(); track toast.id) {\r
      <div class="toast toast-{{ toast.type }}" [class.toast-enter]="toast.isVisible">\r
        <span class="toast-icon">\r
          <fn-icon\r
            [name]="getToastIconName(toast)"\r
            [variant]="'Colour'"\r
            [size]="'medium'"\r
            [color]="\r
              toast.type === 'success'\r
                ? '#6cc24a'\r
                : toast.type === 'warn'\r
                  ? '#ff9f00'\r
                  : toast.type === 'error'\r
                    ? '#ef3e42'\r
                    : '#03182b'\r
            "\r
          ></fn-icon>\r
        </span>\r
        <div class="toast-content">\r
          <span class="toast-message">\r
            {{ getTranslatedMessage(toast.message) | translate }}\r
          </span>\r
        </div>\r
        <button class="toast-close" (click)="removeToast(toast.id)" aria-label="Close">\r
          <fn-icon\r
            [name]="'cross'"\r
            [variant]="'Line'"\r
            [size]="'medium'"\r
            [color]="'#ffffff'"\r
          ></fn-icon>\r
        </button>\r
      </div>\r
    }\r
  </div>\r
}\r
`,
      styles: [".fn-input-container{display:flex;flex-direction:column;width:100%}.fn-label{font-family:Outfit,sans-serif;font-weight:500;margin-bottom:8px;display:flex;align-items:center}.fn-label span{color:#c4cdd2;font-size:14px;font-weight:400}.fn-input-field{width:100%;height:48px;padding:0 16px;background-color:#f7f8f9;border-bottom:1.5px solid #c4cdd2;font-family:Outfit,sans-serif;font-size:16px;color:#03182b;transition:all .2s ease;border-radius:4px 4px 0 0}.fn-input-field::placeholder{color:#c4cdd2}.fn-input-field:focus{outline:none;background-color:#fff;border-bottom-color:#03182b}.fn-input-field.error{border-bottom-color:#ef3e42}.fn-input-field.success{border-bottom-color:#6cc24a}.fn-input-field.disabled{background-color:#eef0f2;color:#c4cdd2;cursor:not-allowed}.fn-input-field.pl-10{padding-left:40px!important}.fn-input-field.has-prefix-text{padding-left:100px!important}.fn-input-field.pr-10{padding-right:40px!important}.fn-input-field.has-suffix-text{padding-right:120px!important}.fn-input-field.pr-12{padding-right:44px!important}.fn-input-field.pr-20{padding-right:72px!important}.fn-input-field.pr-24{padding-right:88px!important}.fn-input-field.pr-30{padding-right:104px!important}.fn-input-field.pr-32{padding-right:120px!important}.fn-field-message-container{margin-top:4px}.fn-field-message-text{font-family:Outfit,sans-serif;font-size:12px;color:#c4cdd2}.fn-field-message-text.error{color:#ef3e42}.fn-field-message-text.success{color:#6cc24a}.icon-container{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px}.relative{position:relative}.absolute{position:absolute}.right-0{right:0}.left-0{left:0}.top-1\\/2{top:50%}.-translate-y-1\\/2{transform:translateY(-50%)}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.pr-3{padding-right:.75rem}.pl-3{padding-left:.75rem}.mt-2{margin-top:.5rem}.space-y-1>:not([hidden])~:not([hidden]){margin-top:.25rem}.text-xs{font-size:.75rem}.font-medium{font-weight:500}.h-1\\.5{height:.375rem}.w-full{width:100%}.bg-\\[\\#eef0f2\\]{background-color:#eef0f2}.rounded-full{border-radius:9999px}.overflow-hidden{overflow:hidden}.transition-all{transition-property:all}.duration-300{transition-duration:.3s}.cursor-pointer{cursor:pointer}.opacity-50{opacity:.5}.cursor-not-allowed{cursor:not-allowed}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.toast-container{position:fixed;top:24px;left:50%;transform:translate(-50%);z-index:9999;width:100%;max-width:336px;display:flex;flex-direction:column;gap:8px;pointer-events:none}.toast{display:flex;align-items:center;background:#25333f;border-radius:8px;padding:12px;width:336px;max-width:100%;opacity:0;transform:translateY(-20px);transition:all .3s cubic-bezier(.4,0,.2,1);pointer-events:auto}.toast.toast-enter{opacity:1;transform:translateY(0)}.toast.toast-success{border-left:4px solid #6cc24a}.toast.toast-warn{border-left:4px solid #ff9f00}.toast.toast-error{border-left:4px solid #ef3e42}.toast.toast-info{border-left:4px solid #3b82f6}.toast .toast-icon{width:24px;height:24px;display:flex;align-items:center;justify-content:center;margin-right:8px;flex-shrink:0}.toast .toast-content{flex:1;min-width:0}.toast .toast-message{font-size:14px;line-height:20px;color:#fff;display:block}.toast .toast-close{background:none;border:none;font-size:20px;color:#fff;opacity:.7;cursor:pointer;padding:0;margin-left:8px;width:24px;height:24px;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:opacity .2s;pointer-events:auto}.toast .toast-close:hover{opacity:1}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }],
    helperHandle: [{
      type: Input
    }],
    toastService: [{
      type: Input
    }],
    currencyMeta: [{
      type: Input
    }],
    defaultLocale: [{
      type: Input
    }],
    form: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    fieldBlur: [{
      type: Output
    }],
    textareaElement: [{
      type: ViewChild,
      args: ["fnTextarea"]
    }]
  });
})();
export {
  DEFAULT_CURRENCY_META,
  FNInput,
  FN_TOAST_SERVICE
};
//# sourceMappingURL=fn-input.js.map
