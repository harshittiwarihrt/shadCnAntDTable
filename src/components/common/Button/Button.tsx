import React from "react";
import { Button, ButtonProps, ConfigProvider, Space } from "antd";
import { useButtonGroupStyles, useENoobButtonStyles, useStyles } from "./style";
import { RefObject, useState } from "react";
import { EIcon } from "..";
import { useAppTheme } from "~/theme";
import { WaveConfig } from "antd/es/config-provider/context";

// Note: Define interface EButtonProps that extends ButtonProps
export interface EButtonProps extends ButtonProps {
  ref?: RefObject<HTMLDivElement>;
}

// Note: Define EButton functional component that takes EButtonProps as props
export const EButton: React.FC<EButtonProps> = ({ ref, ...props }) => {
  return (
    // Note: Render Button component with styles from props and additional props passed down
    <Button
      {...props}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props?.style,
      }}
    />
  );
};

// Note: Define EIconButtonVariant type with specific string values
export type EIconButtonVariant =
  | "default"
  | "transparent"
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "blue";

// Note: Define interface EIconButtonProps that extends ButtonProps and includes a variant prop

interface EIconButtonProps extends EButtonProps {
  eIconButtonVariant?: EIconButtonVariant;
}

// Note: Define EIconButtonIcon functional component that takes EIconButtonProps as props and renders EButton component with specific styles
export const EIconButtonIcon: React.FC<EIconButtonProps> = ({
  eIconButtonVariant = "default",
  shape = "round",
  size = "small",
  ...props
}) => {
  const { styles } = useStyles({ buttonVariant: eIconButtonVariant, size });
  return (
    <EButton size={size} shape={shape} className={styles.button} {...props} />
  );
};

interface ENoobButtonProps extends EButtonProps {
  wantHoverEffect?: boolean;
  buttonVariant?: EIconButtonVariant;
}

export const ENoobButton: React.FC<ENoobButtonProps> = ({
  buttonVariant = "default",
  shape = "default",
  size = "small",
  wantHoverEffect = false,
  ...props
}) => {
  const { styles } = useENoobButtonStyles({
    buttonVariant,
    size,
    wantHoverEffect,
  });
  return <EButton shape={shape} className={styles.button} {...props} />;
};

// Note: Define interface EButtonGroupOptions for button group options
export interface EButtonGroupOptions {
  value: string | number;
  label: string | React.ReactNode;
}

// Note: Define interface EButtonGroupProps that extends ButtonProps and includes options, value, and onChange props
export interface EButtonGroupProps extends Omit<ButtonProps, "onChange"> {
  options: EButtonGroupOptions[];
  onChange: (value: string | number) => void;
}

// Note: Define EButtonGroup functional component that takes EButtonGroupProps as props and renders a group of buttons based on the options provided
export const EButtonGroup: React.FC<EButtonGroupProps> = ({
  options,
  value,
  onChange = () => null,
  size,
  ...rest
}) => {
  // Note: Use useState hook to manage the selected button value
  const [selected, setSelected] = useState(value || options?.[0]?.value);

  // Note: Use useButtonGroupStyles hook to get styles and classNames for button group
  const { styles, cx } = useButtonGroupStyles();

  return (
    // Note: Render a compact Space component to create space between buttons
    <Space.Compact>
      {/* Note: Map through options and render Button components based on the selected value */}
      {options?.map((item, key) => (
        <Button
          {...rest}
          className={cx(rest.className, styles.button)}
          key={key}
          type={selected === item?.value ? "primary" : "default"}
          value={item?.value}
          onClick={() => {
            // Note: Update selected value and call the onChange callback with the selected value
            setSelected(item?.value);
            onChange(item?.value);
          }}
        >
          {item?.label}
        </Button>
      ))}
    </Space.Compact>
  );
};

export interface EButtonIconProps extends EButtonProps {
  icon?: string;
  title?: string;
}

export const EIconButton: React.FC<EButtonIconProps> = ({
  icon,
  title,
  ...rest
}) => {
  return (
    <EButton {...(rest as EButtonProps)}>
      <EIcon
        fontSize={18}
        style={{ marginRight: "4px" }}
        icon={icon as string}
      />
      {title}
    </EButton>
  );
};

export const EButtonTransparent: React.FC<EButtonProps> = ({
  ref,
  ...props
}) => {
  const token = useAppTheme();
  return (
    // Note: Render Button component with styles from props and additional props passed down
    <Button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        border: `1px solid ${token.lightBorderWinterWhisper}`,
        ...props?.style,
      }}
      {...props}
    />
  );
};

interface TableDeleteButtonProps extends ButtonProps {
  indicator?: number;
}

export const TableDeleteButton: React.FC<TableDeleteButtonProps> = ({
  indicator,
  ...rest
}) => {
  return (
    <EButton type="primary" danger size="middle" {...rest}>
      <EIcon icon={"ic:baseline-delete"} style={{ marginRight: 4 }} />
      Delete ({indicator})
    </EButton>
  );
};

export const TableClearButton: React.FC<TableDeleteButtonProps> = ({
  indicator,
  ...rest
}) => {
  return (
    <EButton
      type="link"
      style={{ fontWeight: "500", display: "flex", alignItems: "center" }}
      {...rest}
    >
      Clear({indicator})
    </EButton>
  );
};

export const EThirdPartyLogInButtonProps: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  const token = useAppTheme();
  return (
    <EButton
      style={{
        width: "100%",
        color: token.neutral8,
        fontWeight: "500",
        marginBottom: 14,
      }}
      {...rest}
    >
      {children}
    </EButton>
  );
};

// note Shake Effect
const showShakeEffectConfig: WaveConfig["showEffect"] = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node: any,
  { component }
) => {
  if (component !== "Button") {
    return;
  }

  const seq = [0, -15, 15, -5, 5, 0];
  const itv = 10;

  let steps = 0;

  function loop() {
    cancelAnimationFrame(node.effectTimeout);

    node.effectTimeout = requestAnimationFrame(() => {
      const currentStep = Math.floor(steps / itv);
      const current = seq[currentStep];
      const next = seq[currentStep + 1];

      if (!next) {
        node.style.transform = "";
        node.style.transition = "";
        return;
      }

      const angle = current + ((next - current) / itv) * (steps % itv);

      node.style.transform = `rotate(${angle}deg)`;
      node.style.transition = "none";

      steps += 1;
      loop();
    });
  }

  loop();
};

export const ShakeButtonWrapper = ({
  showShakeEffect = true,
  showEffect = showShakeEffectConfig,
  children,
  ...wave
}: ShakeButtonProps) => {
  return (
    <ConfigProvider
      wave={{
        showEffect: showShakeEffect ? showEffect : undefined,
        ...wave,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
interface ShakeButtonProps extends WaveConfig {
  buttonProps?: ButtonProps;
  children: React.ReactNode;
  showShakeEffect?: boolean;
}

export const ShakeButton = ({
  showShakeEffect = true,
  showEffect = showShakeEffectConfig,
  children,
  buttonProps,
  ...wave
}: ShakeButtonProps) => {
  return (
    <ShakeButtonWrapper showShakeEffect={showShakeEffect} {...wave}>
      <EButton type="primary" {...buttonProps}>
        {children}
      </EButton>
    </ShakeButtonWrapper>
  );
};
