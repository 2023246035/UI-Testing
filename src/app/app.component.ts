import { CommonModule } from "@angular/common";
import { Component, inject} from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { FNFieldMessage } from "fn-field-message";
import { FNInput, FNInputBase } from "fn-input";
import { FNLabel } from "fn-label";
import { FNToast, ToastService } from "fn-toast";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    FNLabel,
    TranslateModule,
    FNInput,
    ReactiveFormsModule,
    FNToast,
    FNFieldMessage,
  ],
  templateUrl: "./app.component.html",
  styles: [
    `
      :host ::ng-deep .fn-label {
        width: 100%;
      }
      .accordion-content {
        max-height: 0;
        overflow: hidden;
        transition:
          max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
          opacity 0.3s ease;
        opacity: 0;
      }
      .accordion-content.expanded {
        max-height: 5000px;
        opacity: 1;
        margin-top: 2rem;
      }
      .chevron-icon {
        transition: transform 0.3s ease;
      }
      .chevron-icon.rotated {
        transform: rotate(180deg);
      }
    `,
  ],
})
export class AppComponent {
  title = "FN Component Library - Deep Prop Integration";
  form: FormGroup;
  activeSection: string | null = "fundamentals";

  private readonly fb = inject(FormBuilder);
  public toastService = inject(ToastService);

  toggleSection(section: string) {
    this.activeSection = this.activeSection === section ? null : section;
  }

  // ==========================================
  // 1. FN-LABEL EXHAUSTIVE VARIETIES (Deep)
  // ==========================================
  typographyVariants: any[] = [
    "h1",
    "h1Bold",
    "h2",
    "h2Bold",
    "h3",
    "h3Bold",
    "p1",
    "p1Bold",
    "p2",
    "p2Bold",
    "p3",
    "p3Bold",
    "p4",
    "p4Bold",
    "interactionLarge",
    "interactionLargeBold",
    "interactionMedium",
    "interactionMediumBold",
    "interactionSmall",
    "interactionSmallBold",
    "avatarLabel",
  ];

  statusLabels: any[] = [
    "Standard",
    "Success",
    "Hot",
    "Warning",
    "Disabled",
    "RHBPremierBanking",
  ];

  // ==========================================
  // 2. DEEP PROP INTEGRATION - INPUT VARIETIES
  // ==========================================

  // --- Group 1: Fundamentals & Visibility ---
  fundBasic: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "basic",
    label: "Basic Input",
  };
  fundRequired: FNInputBase = {
    fieldType: "FNInput",
    type: "text",
    name: "required",
    label: "Required Field",
    required: true,
    hideOptional: true,
  };

  // Visibility Demo
  visibilityTrigger: any = {
    fieldType: "FNInput",
    type: "text",
    name: "trigger",
    label: "Toggle Next Field",
    placeholder: "Type 'show' to reveal...",
  };
  visibilityControlled: any = {
    fieldType: "FNInput",
    type: "text",
    name: "dependent",
    label: "I am Conditional",
    visibilityCondition: { dependsOn: "trigger", showWhen: "show" },
  };

  // --- Group 2: The Affix & Icon Variant Lab ---
  iconLine: any = {
    fieldType: "FNInput",
    type: "text",
    name: "iconLine",
    label: "Line Icon",
    icon: { name: "home", variant: "Line", size: 24 },
  };
  iconFill: any = {
    fieldType: "FNInput",
    type: "text",
    name: "iconFill",
    label: "Fill Icon",
    icon: { name: "home", variant: "Fill", size: 24 },
  };
  iconDuotone: any = {
    fieldType: "FNInput",
    type: "text",
    name: "iconDuotone",
    label: "Duotone Icon",
    icon: { name: "home", variant: "Duotone", size: 24 },
  };
  prefixAction: any = {
    fieldType: "FNInput",
    type: "text",
    name: "prefixAction",
    label: "Reactive Prefix",
    prefix: {
      text: "Search",
      onClick: () => this.toastService.info("Prefix Action triggered!"),
    },
  };

  // --- Group 3: The Security Vault (Password Props) ---
  passStrength: any = {
    fieldType: "FNInput",
    type: "password",
    name: "pStrength",
    label: "High-Security Password",
    toggleMask: true,
    feedback: true,
    weakLabel: "Vulnerable",
    mediumLabel: "Sufficient",
    strongLabel: "Impregnable",
  };
  passGenerator: any = {
    fieldType: "FNInput",
    type: "password",
    name: "pGen",
    label: "Enterprise Key Gen",
    hasGenerateKey: true,
    isCopyText: true,
    toggleMask: true,
    onGenerateKey: () => {
      const k = "FN-" + Math.random().toString(36).substring(4).toUpperCase();
      this.form.get("pGen")?.setValue(k);
      this.toastService.success("Secure Key Generated");
    },
  };

  // --- Group 4: The Data Engine (Numeric Props) ---
  numStacked: any = {
    fieldType: "FNInput",
    type: "number",
    name: "nStacked",
    label: "Stacked Layout",
    showButtons: true,
    buttonLayout: "stacked",
  };
  numHorizontal: any = {
    fieldType: "FNInput",
    type: "number",
    name: "nHorizontal",
    label: "Horizontal Layout",
    showButtons: true,
    buttonLayout: "horizontal",
    incrementButtonIcon: "add",
    decrementButtonIcon: "remove",
  };
  numVertical: any = {
    fieldType: "FNInput",
    type: "number",
    name: "nVertical",
    label: "Vertical Layout",
    showButtons: true,
    buttonLayout: "vertical",
  };
  currencyMYR: any = {
    fieldType: "FNInput",
    type: "number",
    name: "cMYR",
    label: "Currency: MYR (Code)",
    isCurrency: true,
    currency: "MYR",
    currencyDisplay: "code",
    locale: "en-MY",
  };
  numPrecision: any = {
    fieldType: "FNInput",
    type: "number",
    name: "nPrecise",
    label: "Fractional Precision",
    minFractionDigits: 2,
    maxFractionDigits: 4,
    step: 0.01,
    value: 1.2345,
  };

  // --- Group 5: Logic & Style Overrides ---
  logicAddress: any = {
    fieldType: "FNInput",
    type: "text",
    name: "lAddress",
    label: "Adaptive Address Line",
    isAlphanumeric: true,
    isAddressLine: true,
    placeholder: "Allows / ( ) , symbols",
  };
  styleOverride: any = {
    fieldType: "FNInput",
    type: "text",
    name: "sOverride",
    label: "Deep Style Overrides",
    labelVariant: "h3Bold",
    labelSize: "14px",
    color: "#4f46e5",
    valueColor: "#059669",
    valueSize: "18px",
    value: "Custom Styled Text",
  };
  statusSuccess: any = {
    fieldType: "FNInput",
    type: "text",
    name: "sSuccess",
    label: "Explicit Success",
    statusLabel: "Success",
    hasSuccessBorder: true,
    value: "Verified State",
  };
  statusRhb: any = {
    fieldType: "FNInput",
    type: "text",
    name: "sRhb",
    label: "RHB Premier State",
    statusLabel: "RHBPremierBanking",
    value: "Premier Account",
  };

  // --- Group 6: Textarea & Content ---
  areaDeep: any = {
    fieldType: "FNInput",
    type: "textarea",
    name: "aDeep",
    label: "Configurable Textarea",
    rows: 5,
    cols: 50,
    maxLength: 500,
    helperText: "Max 500 characters allowed.",
  };

  // ==========================================
  // 3. OTHER COMPONENT DATA
  // ==========================================
  standaloneMessage: any = {
    name: "standalone",
    label: "Autonomous Validation",
    helperText: "Reactive to form control state.",
    errors: {
      required: "Mandatory input required.",
      min: "Value must exceed threshold.",
    },
  };

  triggerSuccess() {
    this.toastService.success("Task Synchronized", "Enterprise");
  }
  triggerError() {
    this.toastService.error("System Failure", "Critical");
  }
  triggerWarn() {
    this.toastService.warn("Low Quota", "System");
  }
  triggerInfo() {
    this.toastService.info("Refactor Complete", "Notice");
  }

  constructor() {
    this.form = this.fb.group({
      basic: ["", [Validators.required]],
      required: [""],
      trigger: [""],
      dependent: [""],
      iconLine: [""],
      iconFill: [""],
      iconDuotone: [""],
      prefixAction: [""],
      pStrength: ["", [Validators.minLength(8)]],
      pGen: [""],
      nStacked: [10],
      nHorizontal: [20],
      nVertical: [30],
      cMYR: [1500.5],
      nPrecise: [1.2345],
      lAddress: [""],
      sOverride: ["Custom Styled Text"],
      sSuccess: ["Valid"],
      sRhb: ["Premier"],
      aDeep: [""],
      standaloneControl: ["", [Validators.required]],
    });
  }

  get standaloneControl() {
    return this.form.get("standaloneControl") as any;
  }
}
