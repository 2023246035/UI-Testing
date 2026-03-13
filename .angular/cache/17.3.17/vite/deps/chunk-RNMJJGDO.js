import {
  FNLabel
} from "./chunk-ENHLTDN7.js";
import {
  TranslateModule,
  TranslateService
} from "./chunk-JZDDGXGG.js";
import {
  CommonModule
} from "./chunk-3PIUJSML.js";
import {
  ChangeDetectorRef,
  Component,
  Input,
  Subscription,
  inject,
  merge,
  setClassMetadata,
  startWith,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-22GAGD2M.js";

// node_modules/fn-field-message/fesm2022/fn-field-message.mjs
var FNFieldMessage = class _FNFieldMessage {
  cdr;
  field;
  control;
  hasFocus = false;
  translate = inject(TranslateService);
  subs = new Subscription();
  constructor(cdr) {
    this.cdr = cdr;
  }
  ngOnInit() {
    if (!this.control) {
      this.cdr.detectChanges();
      return;
    }
    const val$ = this.control.valueChanges.pipe(startWith(this.control.value));
    const status$ = this.control.statusChanges.pipe(startWith(this.control.status));
    this.subs.add(merge(val$, status$).subscribe(() => {
      try {
        this.cdr.detectChanges();
      } catch {
        this.cdr.markForCheck();
      }
    }));
  }
  ngOnChanges(changes) {
    if (changes["hasFocus"] || changes["control"]) {
      try {
        this.cdr.detectChanges();
      } catch {
        this.cdr.markForCheck();
      }
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
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
      return this.field?.errors?.default || "Please enter " + this.translate.instant(this.field?.label);
    }
    return this.field?.helperText || "";
  }
  get statusColor() {
    if (this.control?.disabled) return "#c4cdd2";
    if (this.isError) return "#ef3e42";
    if (this.isSuccess) return "#6cc24a";
    return "#0067b1";
  }
  get isError() {
    return !!(this.control?.touched && this.control?.errors);
  }
  get isSuccess() {
    return !!(this.control?.valid && this.control?.touched);
  }
  get isHelper() {
    return true;
  }
  static ɵfac = function FNFieldMessage_Factory(t) {
    return new (t || _FNFieldMessage)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FNFieldMessage,
    selectors: [["fn-field-message"]],
    inputs: {
      field: "field",
      control: "control",
      hasFocus: "hasFocus"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 2,
    consts: [["variant", "p4", 3, "color", "label"]],
    template: function FNFieldMessage_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelement(0, "fn-label", 0);
      }
      if (rf & 2) {
        ɵɵproperty("color", ctx.statusColor)("label", ctx.getFieldMessage());
      }
    },
    dependencies: [CommonModule, TranslateModule, FNLabel],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FNFieldMessage, [{
    type: Component,
    args: [{
      selector: "fn-field-message",
      standalone: true,
      imports: [CommonModule, TranslateModule, FNLabel],
      template: `
    <fn-label variant="p4" [color]="statusColor" [label]="getFieldMessage()"></fn-label>
  `
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }],
    control: [{
      type: Input
    }],
    hasFocus: [{
      type: Input
    }]
  });
})();

export {
  FNFieldMessage
};
//# sourceMappingURL=chunk-RNMJJGDO.js.map
