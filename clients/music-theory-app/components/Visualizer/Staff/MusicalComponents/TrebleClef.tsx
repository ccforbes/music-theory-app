import { CSSProperties } from "react"

const style: CSSProperties = {
    opacity: 0
}

export const TrebleClef: React.FC = () => {
    return <>
        <svg width="90%" viewBox="0 0 3000 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M341.34 62.0029C327.747 61.6502 311.85 94.084 312.379 123.009C312.501 131.819 315.284 149.687 319.344 172.127C293.739 198.609 264.006 225.788 264.006 261.448C263.598 294.127 283.585 335.762 331.006 335.361C338.284 335.311 344.834 334.41 350.652 332.858C354.988 356.61 357.871 375.356 357.853 384.016C358.006 418.154 313.12 421.533 310.968 401.911C320.429 401.586 327.955 394.077 327.955 384.792C327.955 375.306 320.095 367.572 310.342 367.572C304.98 367.572 300.201 369.925 296.96 373.604C296.885 373.679 296.797 373.754 296.724 373.829C295.993 374.605 295.377 375.531 294.768 376.583C292.77 379.961 291.472 384.817 291.402 391.75C291.402 420.332 363.724 438.728 363.724 382.364C363.837 374.781 360.573 355.534 355.819 331.281C407.423 312.635 394.459 236.074 346.975 235.714C343.294 235.751 339.744 236.179 336.331 237.045C333.626 224.038 331.016 211.414 328.736 199.813C346.768 182.116 362.512 159.207 362.159 116.987C362.214 86.6682 352.105 62.3557 341.34 62.0029ZM344.548 91.3334C350.7 90.7403 355.584 96.4467 355.584 109.008C356.082 130.583 340.957 149.424 322.946 168.373C321.223 157.994 320.093 149.584 319.97 144.596C320.481 110.893 334.294 92.322 344.548 91.3334ZM325.215 203.177C327.412 214.477 329.783 226.383 332.18 238.374C300.752 249.547 285.669 293.321 330.224 312.911C303.066 289.807 316.434 262.459 336.015 257.694C340.939 282.261 345.748 306.504 349.635 327.452C344.358 329.304 338.199 330.38 331.006 330.431C313.02 330.431 277.078 318.993 277.078 275.681C277.078 239.405 302.242 224.664 325.215 203.177ZM340.478 256.91C341.262 256.863 342.111 256.883 342.903 256.91C375.621 256.91 387.962 308.831 354.645 325.425C350.499 304.601 345.473 280.724 340.478 256.91Z" fill="black" stroke="black" />
            <line x1="829" y1="385" x2="956" y2="385" stroke="black" stroke-width="4" />
            <line x1="1004" y1="385" x2="1131" y2="385" stroke="black" stroke-width="4" />
            <line x1="229" y1="335" x2="2229" y2="335" stroke="black" stroke-width="4" />
            <line x1="229" y1="285" x2="2229" y2="285" stroke="black" stroke-width="4" />
            <line x1="229" y1="235" x2="2229" y2="235" stroke="black" stroke-width="4" />
            <line x1="229" y1="185" x2="2229" y2="185" stroke="black" stroke-width="4" />
            <line x1="229" y1="135" x2="2229" y2="135" stroke="black" stroke-width="4" />
            <line x1="2054" y1="82" x2="2181" y2="82" stroke="black" stroke-width="4" />
            <g className="treble-notes">
                <g className="note-1">
                    <path d="M929 384C929 398.359 908.606 412 889 412C869.394 412 858 402.359 858 388C858 373.641 877.894 360 897.5 360C917.106 360 929 369.641 929 384Z" fill="black" />
                </g>
                <g className="sharp-1" style={style}>
                    <path d="M810.335 404.001V371.091L824.327 367.229V399.971L810.335 404.001ZM837.885 396.039L828.266 398.796V366.054L837.885 363.368V349.767L828.266 352.454V319H824.327V353.468L810.335 357.491V324.961H806.62V358.729L797 361.423V375.051L806.62 372.365V405.043L797 407.723V421.295L806.62 418.609V451.873H810.335V417.419L824.327 413.572V445.934H828.266V412.354L837.885 409.661V396.039Z" fill="black" />
                </g>
                <g className="flat-1" style={style}>
                    <path d="M825.489 379.792C825.489 384.524 823.715 389.056 818.849 395.138C813.692 401.582 809.352 405.27 803.633 409.607V381.364C804.933 378.081 806.851 375.423 809.393 373.382C811.928 371.349 814.495 370.329 817.096 370.329C821.391 370.329 824.115 372.765 825.292 377.62C825.424 378.015 825.489 378.739 825.489 379.792ZM824.872 360.042C821.325 360.042 817.721 361.022 814.051 362.988C810.381 364.947 806.908 367.572 803.633 370.839V311H799V413.491C799 416.388 799.79 417.836 801.37 417.836C802.283 417.836 803.418 417.071 805.114 416.059C809.915 413.194 812.907 411.279 816.158 409.26C819.866 406.956 824.041 404.265 829.563 398.999C833.373 395.172 836.13 391.313 837.841 387.429C839.545 383.536 840.4 379.685 840.4 375.859C840.4 370.197 838.895 366.173 835.883 363.795C832.476 361.293 828.797 360.042 824.872 360.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-2">
                    <path d="M1104 359C1104 373.359 1083.61 387 1064 387C1044.39 387 1033 377.359 1033 363C1033 348.641 1052.89 335 1072.5 335C1092.11 335 1104 344.641 1104 359Z" fill="black" />
                </g>
                <g className="sharp-2" style={style}>
                    <path d="M987.335 376.001V343.091L1001.33 339.229V371.971L987.335 376.001ZM1014.89 368.039L1005.27 370.796V338.054L1014.89 335.368V321.767L1005.27 324.454V291H1001.33V325.468L987.335 329.491V296.961H983.62V330.729L974 333.423V347.051L983.62 344.365V377.043L974 379.723V393.295L983.62 390.609V423.873H987.335V389.419L1001.33 385.572V417.934H1005.27V384.354L1014.89 381.661V368.039Z" fill="black" />
                </g>
                <g className="flat-2" style={style}>
                    <path d="M1000.49 353.792C1000.49 358.524 998.715 363.056 993.849 369.138C988.692 375.582 984.352 379.27 978.633 383.607V355.364C979.933 352.081 981.851 349.423 984.393 347.382C986.928 345.349 989.495 344.329 992.096 344.329C996.391 344.329 999.115 346.765 1000.29 351.62C1000.42 352.015 1000.49 352.739 1000.49 353.792ZM999.872 334.042C996.325 334.042 992.721 335.022 989.051 336.988C985.381 338.947 981.908 341.572 978.633 344.839V285H974V387.491C974 390.388 974.79 391.836 976.37 391.836C977.283 391.836 978.418 391.071 980.114 390.059C984.915 387.194 987.907 385.279 991.158 383.26C994.866 380.956 999.041 378.265 1004.56 372.999C1008.37 369.172 1011.13 365.313 1012.84 361.429C1014.54 357.536 1015.4 353.685 1015.4 349.859C1015.4 344.197 1013.89 340.173 1010.88 337.795C1007.48 335.293 1003.8 334.042 999.872 334.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-3">
                    <path d="M1279 334C1279 348.359 1258.61 362 1239 362C1219.39 362 1208 352.359 1208 338C1208 323.641 1227.89 310 1247.5 310C1267.11 310 1279 319.641 1279 334Z" fill="black" />
                </g>
                <g className="sharp-3" style={style}>
                    <path d="M1162.33 354.001V321.091L1176.33 317.229V349.971L1162.33 354.001ZM1189.89 346.039L1180.27 348.796V316.054L1189.89 313.368V299.767L1180.27 302.454V269H1176.33V303.468L1162.33 307.491V274.961H1158.62V308.729L1149 311.423V325.051L1158.62 322.365V355.043L1149 357.723V371.295L1158.62 368.609V401.873H1162.33V367.419L1176.33 363.572V395.934H1180.27V362.354L1189.89 359.661V346.039Z" fill="black" />
                </g>
                <g className="flat-3" style={style}>
                    <path d="M1175.49 329.792C1175.49 334.524 1173.72 339.056 1168.85 345.138C1163.69 351.582 1159.35 355.27 1153.63 359.607V331.364C1154.93 328.081 1156.85 325.423 1159.39 323.382C1161.93 321.349 1164.5 320.329 1167.1 320.329C1171.39 320.329 1174.12 322.765 1175.29 327.62C1175.42 328.015 1175.49 328.739 1175.49 329.792ZM1174.87 310.042C1171.33 310.042 1167.72 311.022 1164.05 312.988C1160.38 314.947 1156.91 317.572 1153.63 320.839V261H1149V363.491C1149 366.388 1149.79 367.836 1151.37 367.836C1152.28 367.836 1153.42 367.071 1155.11 366.059C1159.91 363.194 1162.91 361.279 1166.16 359.26C1169.87 356.956 1174.04 354.265 1179.56 348.999C1183.37 345.172 1186.13 341.313 1187.84 337.429C1189.54 333.536 1190.4 329.685 1190.4 325.859C1190.4 320.197 1188.89 316.173 1185.88 313.795C1182.48 311.293 1178.8 310.042 1174.87 310.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-4">
                    <path d="M1454 309C1454 323.359 1433.61 337 1414 337C1394.39 337 1383 327.359 1383 313C1383 298.641 1402.89 285 1422.5 285C1442.11 285 1454 294.641 1454 309Z" fill="black" />
                </g>
                <g className="sharp-4" style={style}>
                    <path d="M1337.33 329.001V296.091L1351.33 292.229V324.971L1337.33 329.001ZM1364.89 321.039L1355.27 323.796V291.054L1364.89 288.368V274.767L1355.27 277.454V244H1351.33V278.468L1337.33 282.491V249.961H1333.62V283.729L1324 286.423V300.051L1333.62 297.365V330.043L1324 332.723V346.295L1333.62 343.609V376.873H1337.33V342.419L1351.33 338.572V370.934H1355.27V337.354L1364.89 334.661V321.039Z" fill="black" />
                </g>
                <g className="flat-4" style={style}>
                    <path d="M1350.49 303.792C1350.49 308.524 1348.72 313.056 1343.85 319.138C1338.69 325.582 1334.35 329.27 1328.63 333.607V305.364C1329.93 302.081 1331.85 299.423 1334.39 297.382C1336.93 295.349 1339.5 294.329 1342.1 294.329C1346.39 294.329 1349.12 296.765 1350.29 301.62C1350.42 302.015 1350.49 302.739 1350.49 303.792ZM1349.87 284.042C1346.33 284.042 1342.72 285.022 1339.05 286.988C1335.38 288.947 1331.91 291.572 1328.63 294.839V235H1324V337.491C1324 340.388 1324.79 341.836 1326.37 341.836C1327.28 341.836 1328.42 341.071 1330.11 340.059C1334.91 337.194 1337.91 335.279 1341.16 333.26C1344.87 330.956 1349.04 328.265 1354.56 322.999C1358.37 319.172 1361.13 315.313 1362.84 311.429C1364.54 307.536 1365.4 303.685 1365.4 299.859C1365.4 294.197 1363.89 290.173 1360.88 287.795C1357.48 285.293 1353.8 284.042 1349.87 284.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-5">
                    <path d="M1629 284C1629 298.359 1608.61 312 1589 312C1569.39 312 1558 302.359 1558 288C1558 273.641 1577.89 260 1597.5 260C1617.11 260 1629 269.641 1629 284Z" fill="black" />
                </g>
                <g className="sharp-5" style={style}>
                    <path d="M1512.33 300.001V267.091L1526.33 263.229V295.971L1512.33 300.001ZM1539.89 292.039L1530.27 294.796V262.054L1539.89 259.368V245.767L1530.27 248.454V215H1526.33V249.468L1512.33 253.491V220.961H1508.62V254.729L1499 257.423V271.051L1508.62 268.365V301.043L1499 303.723V317.295L1508.62 314.609V347.873H1512.33V313.419L1526.33 309.572V341.934H1530.27V308.354L1539.89 305.661V292.039Z" fill="black" />
                </g>
                <g className="flat-5" style={style}>
                    <path d="M1525.49 278.792C1525.49 283.524 1523.72 288.056 1518.85 294.138C1513.69 300.582 1509.35 304.27 1503.63 308.607V280.364C1504.93 277.081 1506.85 274.423 1509.39 272.382C1511.93 270.349 1514.5 269.329 1517.1 269.329C1521.39 269.329 1524.12 271.765 1525.29 276.62C1525.42 277.015 1525.49 277.739 1525.49 278.792ZM1524.87 259.042C1521.33 259.042 1517.72 260.022 1514.05 261.988C1510.38 263.947 1506.91 266.572 1503.63 269.839V210H1499V312.491C1499 315.388 1499.79 316.836 1501.37 316.836C1502.28 316.836 1503.42 316.071 1505.11 315.059C1509.91 312.194 1512.91 310.279 1516.16 308.26C1519.87 305.956 1524.04 303.265 1529.56 297.999C1533.37 294.172 1536.13 290.313 1537.84 286.429C1539.54 282.536 1540.4 278.685 1540.4 274.859C1540.4 269.197 1538.89 265.173 1535.88 262.795C1532.48 260.293 1528.8 259.042 1524.87 259.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-6">
                    <path d="M1804 259C1804 273.359 1783.61 287 1764 287C1744.39 287 1733 277.359 1733 263C1733 248.641 1752.89 235 1772.5 235C1792.11 235 1804 244.641 1804 259Z" fill="black" />
                </g>
                <g className="sharp-6" style={style}>
                    <path d="M1687.33 279.001V246.091L1701.33 242.229V274.971L1687.33 279.001ZM1714.89 271.039L1705.27 273.796V241.054L1714.89 238.368V224.767L1705.27 227.454V194H1701.33V228.468L1687.33 232.491V199.961H1683.62V233.729L1674 236.423V250.051L1683.62 247.365V280.043L1674 282.723V296.295L1683.62 293.609V326.873H1687.33V292.419L1701.33 288.572V320.934H1705.27V287.354L1714.89 284.661V271.039Z" fill="black" />
                </g>
                <g className="flat-6" style={style}>
                    <path d="M1700.49 253.792C1700.49 258.524 1698.72 263.056 1693.85 269.138C1688.69 275.582 1684.35 279.27 1678.63 283.607V255.364C1679.93 252.081 1681.85 249.423 1684.39 247.382C1686.93 245.349 1689.5 244.329 1692.1 244.329C1696.39 244.329 1699.12 246.765 1700.29 251.62C1700.42 252.015 1700.49 252.739 1700.49 253.792ZM1699.87 234.042C1696.33 234.042 1692.72 235.022 1689.05 236.988C1685.38 238.947 1681.91 241.572 1678.63 244.839V185H1674V287.491C1674 290.388 1674.79 291.836 1676.37 291.836C1677.28 291.836 1678.42 291.071 1680.11 290.059C1684.91 287.194 1687.91 285.279 1691.16 283.26C1694.87 280.956 1699.04 278.265 1704.56 272.999C1708.37 269.172 1711.13 265.313 1712.84 261.429C1714.54 257.536 1715.4 253.685 1715.4 249.859C1715.4 244.197 1713.89 240.173 1710.88 237.795C1707.48 235.293 1703.8 234.042 1699.87 234.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-7">
                    <path d="M1979 234C1979 248.359 1958.61 262 1939 262C1919.39 262 1908 252.359 1908 238C1908 223.641 1927.89 210 1947.5 210C1967.11 210 1979 219.641 1979 234Z" fill="black" />
                </g>
                <g className="sharp-7" style={style}>
                    <path d="M1862.33 249.001V216.091L1876.33 212.229V244.971L1862.33 249.001ZM1889.89 241.039L1880.27 243.796V211.054L1889.89 208.368V194.767L1880.27 197.454V164H1876.33V198.468L1862.33 202.491V169.961H1858.62V203.729L1849 206.423V220.051L1858.62 217.365V250.043L1849 252.723V266.295L1858.62 263.609V296.873H1862.33V262.419L1876.33 258.572V290.934H1880.27V257.354L1889.89 254.661V241.039Z" fill="black" />
                </g>
                <g className="flat-7" style={style}>
                    <path d="M1875.49 223.792C1875.49 228.524 1873.72 233.056 1868.85 239.138C1863.69 245.582 1859.35 249.27 1853.63 253.607V225.364C1854.93 222.081 1856.85 219.423 1859.39 217.382C1861.93 215.349 1864.5 214.329 1867.1 214.329C1871.39 214.329 1874.12 216.765 1875.29 221.62C1875.42 222.015 1875.49 222.739 1875.49 223.792ZM1874.87 204.042C1871.33 204.042 1867.72 205.022 1864.05 206.988C1860.38 208.947 1856.91 211.572 1853.63 214.839V155H1849V257.491C1849 260.388 1849.79 261.836 1851.37 261.836C1852.28 261.836 1853.42 261.071 1855.11 260.059C1859.91 257.194 1862.91 255.279 1866.16 253.26C1869.87 250.956 1874.04 248.265 1879.56 242.999C1883.37 239.172 1886.13 235.313 1887.84 231.429C1889.54 227.536 1890.4 223.685 1890.4 219.859C1890.4 214.197 1888.89 210.173 1885.88 207.795C1882.48 205.293 1878.8 204.042 1874.87 204.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-8">
                    <path d="M2154 209C2154 223.359 2133.61 237 2114 237C2094.39 237 2083 227.359 2083 213C2083 198.641 2102.89 185 2122.5 185C2142.11 185 2154 194.641 2154 209Z" fill="black" />
                </g>
                <g className="sharp-8" style={style}>
                    <path d="M2037.33 227.001V194.091L2051.33 190.229V222.971L2037.33 227.001ZM2064.89 219.039L2055.27 221.796V189.054L2064.89 186.368V172.767L2055.27 175.454V142H2051.33V176.468L2037.33 180.491V147.961H2033.62V181.729L2024 184.423V198.051L2033.62 195.365V228.043L2024 230.723V244.295L2033.62 241.609V274.873H2037.33V240.419L2051.33 236.572V268.934H2055.27V235.354L2064.89 232.661V219.039Z" fill="black" />
                </g>
                <g className="flat-8" style={style}>
                    <path d="M2050.49 201.792C2050.49 206.524 2048.72 211.056 2043.85 217.138C2038.69 223.582 2034.35 227.27 2028.63 231.607V203.364C2029.93 200.081 2031.85 197.423 2034.39 195.382C2036.93 193.349 2039.5 192.329 2042.1 192.329C2046.39 192.329 2049.12 194.765 2050.29 199.62C2050.42 200.015 2050.49 200.739 2050.49 201.792ZM2049.87 182.042C2046.33 182.042 2042.72 183.022 2039.05 184.988C2035.38 186.947 2031.91 189.572 2028.63 192.839V133H2024V235.491C2024 238.388 2024.79 239.836 2026.37 239.836C2027.28 239.836 2028.42 239.071 2030.11 238.059C2034.91 235.194 2037.91 233.279 2041.16 231.26C2044.87 228.956 2049.04 226.265 2054.56 220.999C2058.37 217.172 2061.13 213.313 2062.84 209.429C2064.54 205.536 2065.4 201.685 2065.4 197.859C2065.4 192.197 2063.89 188.173 2060.88 185.795C2057.48 183.293 2053.8 182.042 2049.87 182.042Z" fill="black" />
                </g>
            </g>
            <line x1="231" y1="137" x2="231" y2="337" stroke="black" stroke-width="4" />
        </svg>


    </>

}