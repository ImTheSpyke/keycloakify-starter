/**
 * This file has been claimed for ownership from @keycloakify/login-ui version 250004.8.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/styleLevelCustomization.tsx" --revert
 */

import type { ReactNode } from "react";
import type { ClassKey } from "@keycloakify/login-ui/useKcClsx";

type Classes = { [key in ClassKey]?: string };

type StyleLevelCustomization = {
    doUseDefaultCss: boolean;
    classes?: Classes;
    loadCustomStylesheet?: () => void;
    Provider?: (props: { children: ReactNode }) => ReactNode;
};

/**
 * Theme entry point.
 *
 * The stock PatternFly stylesheets stay enabled (`doUseDefaultCss`) so every
 * page Keycloak can render keeps a sane baseline; `styles/` restyles it.
 *
 * `kcHtmlClass` keeps PatternFly's own `login-pf` and adds the `pog-theme`
 * scope our stylesheets are namespaced under. It is deliberately the only
 * class we override: several pages pass their own `bodyClassName`, so a class
 * on the body would silently disappear on those pages. Every other class key
 * falls back to the Keycloak default.
 */
export function useStyleLevelCustomization(): StyleLevelCustomization {
    return {
        doUseDefaultCss: true,
        classes: {
            kcHtmlClass: "login-pf pog-theme"
        },
        loadCustomStylesheet: () => {
            void import("./styles/index.css");
        }
    };
}
