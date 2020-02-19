import { css } from "@emotion/core";
import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const defautLayout = {
    lg: [
        {
            i: "0",
            w: 12,
            h: 3,
            x: 0,
            y: 0,
            minW: 2,
            minH: 3,
            isDraggable: true,
            isResizable: true,
        },
        {
            i: "1",
            w: 12,
            h: 3,
            x: 0,
            y: 3,
            minW: 2,
            minH: 3,
            isDraggable: true,
            isResizable: true,
        },
        {
            i: "2",
            w: 12,
            h: 3,
            x: 0,
            y: 6,
            minW: 2,
            minH: 3,
            isDraggable: true,
            isResizable: true,
        },
    ],
};

export const Grid: React.FC = () => {
    const [layout, setLayout] = useState<typeof defautLayout>({ lg: [] });

    useEffect(() => {
        const local = localStorage.getItem("grid");

        if (local !== null) {
            setLayout(JSON.parse(local));
        } else {
            setLayout(defautLayout);
        }
    }, []);

    return (
        <div>
            <ResponsiveReactGridLayout
                className="layout"
                layouts={layout}
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                rowHeight={30}
                width={1200}
                onLayoutChange={(layouts) => {
                    setLayout({ lg: layouts });
                    localStorage.setItem(
                        "grid",
                        JSON.stringify({ lg: layouts }),
                    );
                }}
            >
                {layout.lg.map((elem) => (
                    <div
                        css={css`
                            border-radius: 5px;
                            box-shadow: 1px 1px 0px #13181b,
                                -1px -1px 0px #4b606b;
                        `}
                        key={elem.i}
                    >
                        <div
                            css={css`
                                padding: 1rem;
                            `}
                        >
                            {elem.i}
                            <button
                                onClick={() => {
                                    console.log(layout.lg.length.toString());
                                    setLayout({
                                        lg: layout.lg.filter((e) => {
                                            return e.i !== elem.i;
                                        }),
                                    });
                                }}
                                type="button"
                            >
                                remove elem
                            </button>
                            <button
                                onClick={() => {
                                    const newLayout = layout.lg.map((e) => {
                                        if (e.i === elem.i) {
                                            return {
                                                ...e,
                                                isDraggable: !e.isDraggable,
                                                isResizable: !e.isResizable,
                                            };
                                        } else {
                                            return e;
                                        }
                                    });
                                    setLayout({ lg: newLayout });
                                    localStorage.setItem(
                                        "grid",
                                        JSON.stringify({ lg: newLayout }),
                                    );
                                    console.log(JSON.stringify(layout));
                                }}
                                type="button"
                            >
                                {elem.isDraggable ? "lock" : "unlock"} elem
                            </button>
                        </div>
                    </div>
                ))}
            </ResponsiveReactGridLayout>
            <button
                onClick={() => {
                    setLayout({
                        lg: [
                            ...layout.lg,
                            {
                                i: (Math.random() * 10000).toString(),
                                w: 12,
                                h: 3,
                                x: 0,
                                y: Infinity,
                                minW: 2,
                                minH: 3,
                                isDraggable: true,
                                isResizable: true,
                            },
                        ],
                    });
                }}
                type="button"
            >
                add elem
            </button>
            <button
                onClick={() => {
                    setLayout(defautLayout);
                }}
                type="button"
            >
                reset layout
            </button>
        </div>
    );
};
