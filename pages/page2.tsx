import { css } from "@emotion/core";
import React from "react";

import { Grid } from "../components/Grid";

export default () => (
    <section
        css={css`
            padding-top: 2rem;
        `}
    >
        <Grid />
    </section>
);
