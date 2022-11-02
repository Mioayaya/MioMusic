import styled from "@emotion/styled";
import ThemeColor from "../../../../../../../common/ThemeColor";
import { MStylesProps } from "../../../../../../../type/interface/styles";

export const MioWebDhHelloDiv = styled.div<MStylesProps>`
  color: ${p => ThemeColor[p.theme]?.font?.light};
`