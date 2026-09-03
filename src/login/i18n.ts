/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "login/i18n.ts"
 *
 * This file is provided by @keycloakify/login-ui version 250004.8.0.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import { i18nBuilder } from "@keycloakify/login-ui/i18n";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder.withThemeName<ThemeName>().build();

export { useI18n, I18nProvider };
