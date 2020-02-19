import { css } from "@emotion/core";
import React from "react";

export default () => (
    <div
        css={css`
            height: 100vh;

            a {
                border-radius: 50px;
                background: linear-gradient(145deg, #5bc6ff, #4da7db);
                box-shadow: 8px 8px 16px #367599, -8px -8px 16px #74fdff;
            }
        `}
    >
        <h1>INDEX</h1>
    </div>
);
