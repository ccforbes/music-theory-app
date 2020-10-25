import { CSSProperties } from "react"

const style: CSSProperties = {
    opacity: 0
}

export const TrebleClef: React.FC = () => {
    return <>
        <svg width="100%" viewBox="0 0 2500 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M290.34 80.0029C276.747 79.6502 260.85 112.084 261.379 141.009C261.501 149.819 264.284 167.687 268.344 190.127C242.739 216.609 213.006 243.788 213.006 279.448C212.598 312.127 232.585 353.762 280.006 353.361C287.284 353.311 293.834 352.41 299.652 350.858C303.988 374.61 306.871 393.356 306.853 402.016C307.006 436.154 262.12 439.533 259.968 419.911C269.429 419.586 276.955 412.077 276.955 402.792C276.955 393.306 269.095 385.572 259.342 385.572C253.98 385.572 249.201 387.925 245.96 391.604C245.885 391.679 245.797 391.754 245.724 391.829C244.993 392.605 244.377 393.531 243.768 394.583C241.77 397.961 240.472 402.817 240.402 409.75C240.402 438.332 312.724 456.728 312.724 400.364C312.837 392.781 309.573 373.534 304.819 349.281C356.423 330.635 343.459 254.074 295.975 253.714C292.294 253.751 288.744 254.179 285.331 255.045C282.626 242.038 280.016 229.414 277.736 217.813C295.768 200.116 311.512 177.207 311.159 134.987C311.214 104.668 301.105 80.3557 290.34 80.0029ZM293.548 109.333C299.7 108.74 304.584 114.447 304.584 127.008C305.082 148.583 289.957 167.424 271.946 186.373C270.223 175.994 269.093 167.584 268.97 162.596C269.481 128.893 283.294 110.322 293.548 109.333ZM274.215 221.177C276.412 232.477 278.783 244.383 281.18 256.374C249.752 267.547 234.669 311.321 279.224 330.911C252.066 307.807 265.434 280.459 285.015 275.694C289.939 300.261 294.748 324.504 298.635 345.452C293.358 347.304 287.199 348.38 280.006 348.431C262.02 348.431 226.078 336.993 226.078 293.681C226.078 257.405 251.242 242.664 274.215 221.177ZM289.478 274.91C290.262 274.863 291.111 274.883 291.903 274.91C324.621 274.91 336.962 326.831 303.645 343.425C299.499 322.601 294.473 298.724 289.478 274.91Z" fill="black" stroke="black" />
            <line x1="187" y1="353" x2="2305" y2="353" stroke="black" strokeWidth="4" />
            <line x1="187" y1="303" x2="2305" y2="303" stroke="black" strokeWidth="4" />
            <line x1="187" y1="253" x2="2305" y2="253" stroke="black" strokeWidth="4" />
            <line x1="187" y1="203" x2="2305" y2="203" stroke="black" strokeWidth="4" />
            <line x1="187" y1="153" x2="2305" y2="153" stroke="black" strokeWidth="4" />
            <g className="treble-lower-ledger-1">
                <line x1="953" y1="403" x2="1080" y2="403" stroke="black" strokeWidth="4" />
            </g>
            <g className="treble-lower-ledger-2" style={style}>
                <line x1="1128" y1="403" x2="1255" y2="403" stroke="black" strokeWidth="4" />
            </g>
            <g className="treble-higher-ledger" style={style}>
                <line x1="2178" y1="100" x2="2305" y2="100" stroke="black" strokeWidth="4" />

            </g>
            <g className="treble-notes">
                <g className="note-1">
                    <path d="M1053 402C1053 416.359 1032.61 430 1013 430C993.394 430 982 420.359 982 406C982 391.641 1001.89 378 1021.5 378C1041.11 378 1053 387.641 1053 402Z" fill="black" />
                </g>
                <g className="sharp-1" style={style}>
                    <path d="M934.335 422.001V389.091L948.327 385.229V417.971L934.335 422.001ZM961.885 414.039L952.266 416.796V384.054L961.885 381.368V367.767L952.266 370.454V337H948.327V371.468L934.335 375.491V342.961H930.62V376.729L921 379.423V393.051L930.62 390.365V423.043L921 425.723V439.295L930.62 436.609V469.873H934.335V435.419L948.327 431.572V463.934H952.266V430.354L961.885 427.661V414.039Z" fill="black" />
                </g>
                <g className="flat-1" style={style}>
                    <path d="M949.489 397.792C949.489 402.524 947.715 407.056 942.849 413.138C937.692 419.582 933.352 423.27 927.633 427.607V399.364C928.933 396.081 930.851 393.423 933.393 391.382C935.928 389.349 938.495 388.329 941.096 388.329C945.391 388.329 948.115 390.765 949.292 395.62C949.424 396.015 949.489 396.739 949.489 397.792ZM948.872 378.042C945.325 378.042 941.721 379.022 938.051 380.988C934.381 382.947 930.908 385.572 927.633 388.839V329H923V431.491C923 434.388 923.79 435.836 925.37 435.836C926.283 435.836 927.418 435.071 929.114 434.059C933.915 431.194 936.907 429.279 940.158 427.26C943.866 424.956 948.041 422.265 953.563 416.999C957.373 413.172 960.13 409.313 961.841 405.429C963.545 401.536 964.4 397.685 964.4 393.859C964.4 388.197 962.895 384.173 959.883 381.795C956.476 379.293 952.797 378.042 948.872 378.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-2">
                    <path d="M1228 377C1228 391.359 1207.61 405 1188 405C1168.39 405 1157 395.359 1157 381C1157 366.641 1176.89 353 1196.5 353C1216.11 353 1228 362.641 1228 377Z" fill="black" />
                </g>
                <g className="sharp-2" style={style}>
                    <path d="M1111.33 394.001V361.091L1125.33 357.229V389.971L1111.33 394.001ZM1138.89 386.039L1129.27 388.796V356.054L1138.89 353.368V339.767L1129.27 342.454V309H1125.33V343.468L1111.33 347.491V314.961H1107.62V348.729L1098 351.423V365.051L1107.62 362.365V395.043L1098 397.723V411.295L1107.62 408.609V441.873H1111.33V407.419L1125.33 403.572V435.934H1129.27V402.354L1138.89 399.661V386.039Z" fill="black" />
                </g>
                <g className="flat-2" style={style}>
                    <path d="M1124.49 371.792C1124.49 376.524 1122.72 381.056 1117.85 387.138C1112.69 393.582 1108.35 397.27 1102.63 401.607V373.364C1103.93 370.081 1105.85 367.423 1108.39 365.382C1110.93 363.349 1113.5 362.329 1116.1 362.329C1120.39 362.329 1123.12 364.765 1124.29 369.62C1124.42 370.015 1124.49 370.739 1124.49 371.792ZM1123.87 352.042C1120.33 352.042 1116.72 353.022 1113.05 354.988C1109.38 356.947 1105.91 359.572 1102.63 362.839V303H1098V405.491C1098 408.388 1098.79 409.836 1100.37 409.836C1101.28 409.836 1102.42 409.071 1104.11 408.059C1108.91 405.194 1111.91 403.279 1115.16 401.26C1118.87 398.956 1123.04 396.265 1128.56 390.999C1132.37 387.172 1135.13 383.313 1136.84 379.429C1138.54 375.536 1139.4 371.685 1139.4 367.859C1139.4 362.197 1137.89 358.173 1134.88 355.795C1131.48 353.293 1127.8 352.042 1123.87 352.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-3">
                    <path d="M1403 352C1403 366.359 1382.61 380 1363 380C1343.39 380 1332 370.359 1332 356C1332 341.641 1351.89 328 1371.5 328C1391.11 328 1403 337.641 1403 352Z" fill="black" />
                </g>
                <g className="sharp-3" style={style}>
                    <path d="M1286.33 372.001V339.091L1300.33 335.229V367.971L1286.33 372.001ZM1313.89 364.039L1304.27 366.796V334.054L1313.89 331.368V317.767L1304.27 320.454V287H1300.33V321.468L1286.33 325.491V292.961H1282.62V326.729L1273 329.423V343.051L1282.62 340.365V373.043L1273 375.723V389.295L1282.62 386.609V419.873H1286.33V385.419L1300.33 381.572V413.934H1304.27V380.354L1313.89 377.661V364.039Z" fill="black" />
                </g>
                <g className="flat-3" style={style}>
                    <path d="M1299.49 347.792C1299.49 352.524 1297.72 357.056 1292.85 363.138C1287.69 369.582 1283.35 373.27 1277.63 377.607V349.364C1278.93 346.081 1280.85 343.423 1283.39 341.382C1285.93 339.349 1288.5 338.329 1291.1 338.329C1295.39 338.329 1298.12 340.765 1299.29 345.62C1299.42 346.015 1299.49 346.739 1299.49 347.792ZM1298.87 328.042C1295.33 328.042 1291.72 329.022 1288.05 330.988C1284.38 332.947 1280.91 335.572 1277.63 338.839V279H1273V381.491C1273 384.388 1273.79 385.836 1275.37 385.836C1276.28 385.836 1277.42 385.071 1279.11 384.059C1283.91 381.194 1286.91 379.279 1290.16 377.26C1293.87 374.956 1298.04 372.265 1303.56 366.999C1307.37 363.172 1310.13 359.313 1311.84 355.429C1313.54 351.536 1314.4 347.685 1314.4 343.859C1314.4 338.197 1312.89 334.173 1309.88 331.795C1306.48 329.293 1302.8 328.042 1298.87 328.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-4">
                    <path d="M1578 327C1578 341.359 1557.61 355 1538 355C1518.39 355 1507 345.359 1507 331C1507 316.641 1526.89 303 1546.5 303C1566.11 303 1578 312.641 1578 327Z" fill="black" />
                </g>
                <g className="sharp-4" style={style}>
                    <path d="M1461.33 347.001V314.091L1475.33 310.229V342.971L1461.33 347.001ZM1488.89 339.039L1479.27 341.796V309.054L1488.89 306.368V292.767L1479.27 295.454V262H1475.33V296.468L1461.33 300.491V267.961H1457.62V301.729L1448 304.423V318.051L1457.62 315.365V348.043L1448 350.723V364.295L1457.62 361.609V394.873H1461.33V360.419L1475.33 356.572V388.934H1479.27V355.354L1488.89 352.661V339.039Z" fill="black" />
                </g>
                <g className="flat-4" style={style}>
                    <path d="M1474.49 321.792C1474.49 326.524 1472.72 331.056 1467.85 337.138C1462.69 343.582 1458.35 347.27 1452.63 351.607V323.364C1453.93 320.081 1455.85 317.423 1458.39 315.382C1460.93 313.349 1463.5 312.329 1466.1 312.329C1470.39 312.329 1473.12 314.765 1474.29 319.62C1474.42 320.015 1474.49 320.739 1474.49 321.792ZM1473.87 302.042C1470.33 302.042 1466.72 303.022 1463.05 304.988C1459.38 306.947 1455.91 309.572 1452.63 312.839V253H1448V355.491C1448 358.388 1448.79 359.836 1450.37 359.836C1451.28 359.836 1452.42 359.071 1454.11 358.059C1458.91 355.194 1461.91 353.279 1465.16 351.26C1468.87 348.956 1473.04 346.265 1478.56 340.999C1482.37 337.172 1485.13 333.313 1486.84 329.429C1488.54 325.536 1489.4 321.685 1489.4 317.859C1489.4 312.197 1487.89 308.173 1484.88 305.795C1481.48 303.293 1477.8 302.042 1473.87 302.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-5">
                    <path d="M1753 302C1753 316.359 1732.61 330 1713 330C1693.39 330 1682 320.359 1682 306C1682 291.641 1701.89 278 1721.5 278C1741.11 278 1753 287.641 1753 302Z" fill="black" />
                </g>
                <g className="sharp-5" style={style}>
                    <path d="M1636.33 318.001V285.091L1650.33 281.229V313.971L1636.33 318.001ZM1663.89 310.039L1654.27 312.796V280.054L1663.89 277.368V263.767L1654.27 266.454V233H1650.33V267.468L1636.33 271.491V238.961H1632.62V272.729L1623 275.423V289.051L1632.62 286.365V319.043L1623 321.723V335.295L1632.62 332.609V365.873H1636.33V331.419L1650.33 327.572V359.934H1654.27V326.354L1663.89 323.661V310.039Z" fill="black" />
                </g>
                <g className="flat-5" style={style}>
                    <path d="M1649.49 296.792C1649.49 301.524 1647.72 306.056 1642.85 312.138C1637.69 318.582 1633.35 322.27 1627.63 326.607V298.364C1628.93 295.081 1630.85 292.423 1633.39 290.382C1635.93 288.349 1638.5 287.329 1641.1 287.329C1645.39 287.329 1648.12 289.765 1649.29 294.62C1649.42 295.015 1649.49 295.739 1649.49 296.792ZM1648.87 277.042C1645.33 277.042 1641.72 278.022 1638.05 279.988C1634.38 281.947 1630.91 284.572 1627.63 287.839V228H1623V330.491C1623 333.388 1623.79 334.836 1625.37 334.836C1626.28 334.836 1627.42 334.071 1629.11 333.059C1633.91 330.194 1636.91 328.279 1640.16 326.26C1643.87 323.956 1648.04 321.265 1653.56 315.999C1657.37 312.172 1660.13 308.313 1661.84 304.429C1663.54 300.536 1664.4 296.685 1664.4 292.859C1664.4 287.197 1662.89 283.173 1659.88 280.795C1656.48 278.293 1652.8 277.042 1648.87 277.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-6">
                    <path d="M1928 277C1928 291.359 1907.61 305 1888 305C1868.39 305 1857 295.359 1857 281C1857 266.641 1876.89 253 1896.5 253C1916.11 253 1928 262.641 1928 277Z" fill="black" />
                </g>
                <g className="sharp-6" style={style}>
                    <path d="M1811.33 297.001V264.091L1825.33 260.229V292.971L1811.33 297.001ZM1838.89 289.039L1829.27 291.796V259.054L1838.89 256.368V242.767L1829.27 245.454V212H1825.33V246.468L1811.33 250.491V217.961H1807.62V251.729L1798 254.423V268.051L1807.62 265.365V298.043L1798 300.723V314.295L1807.62 311.609V344.873H1811.33V310.419L1825.33 306.572V338.934H1829.27V305.354L1838.89 302.661V289.039Z" fill="black" />
                </g>
                <g className="flat-6" style={style}>
                    <path d="M1824.49 271.792C1824.49 276.524 1822.72 281.056 1817.85 287.138C1812.69 293.582 1808.35 297.27 1802.63 301.607V273.364C1803.93 270.081 1805.85 267.423 1808.39 265.382C1810.93 263.349 1813.5 262.329 1816.1 262.329C1820.39 262.329 1823.12 264.765 1824.29 269.62C1824.42 270.015 1824.49 270.739 1824.49 271.792ZM1823.87 252.042C1820.33 252.042 1816.72 253.022 1813.05 254.988C1809.38 256.947 1805.91 259.572 1802.63 262.839V203H1798V305.491C1798 308.388 1798.79 309.836 1800.37 309.836C1801.28 309.836 1802.42 309.071 1804.11 308.059C1808.91 305.194 1811.91 303.279 1815.16 301.26C1818.87 298.956 1823.04 296.265 1828.56 290.999C1832.37 287.172 1835.13 283.313 1836.84 279.429C1838.54 275.536 1839.4 271.685 1839.4 267.859C1839.4 262.197 1837.89 258.173 1834.88 255.795C1831.48 253.293 1827.8 252.042 1823.87 252.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-7">
                    <path d="M2103 252C2103 266.359 2082.61 280 2063 280C2043.39 280 2032 270.359 2032 256C2032 241.641 2051.89 228 2071.5 228C2091.11 228 2103 237.641 2103 252Z" fill="black" />
                </g>
                <g className="sharp-7" style={style}>
                    <path d="M1986.33 267.001V234.091L2000.33 230.229V262.971L1986.33 267.001ZM2013.89 259.039L2004.27 261.796V229.054L2013.89 226.368V212.767L2004.27 215.454V182H2000.33V216.468L1986.33 220.491V187.961H1982.62V221.729L1973 224.423V238.051L1982.62 235.365V268.043L1973 270.723V284.295L1982.62 281.609V314.873H1986.33V280.419L2000.33 276.572V308.934H2004.27V275.354L2013.89 272.661V259.039Z" fill="black" />
                </g>
                <g className="flat-7" style={style}>
                    <path d="M1999.49 241.792C1999.49 246.524 1997.72 251.056 1992.85 257.138C1987.69 263.582 1983.35 267.27 1977.63 271.607V243.364C1978.93 240.081 1980.85 237.423 1983.39 235.382C1985.93 233.349 1988.5 232.329 1991.1 232.329C1995.39 232.329 1998.12 234.765 1999.29 239.62C1999.42 240.015 1999.49 240.739 1999.49 241.792ZM1998.87 222.042C1995.33 222.042 1991.72 223.022 1988.05 224.988C1984.38 226.947 1980.91 229.572 1977.63 232.839V173H1973V275.491C1973 278.388 1973.79 279.836 1975.37 279.836C1976.28 279.836 1977.42 279.071 1979.11 278.059C1983.91 275.194 1986.91 273.279 1990.16 271.26C1993.87 268.956 1998.04 266.265 2003.56 260.999C2007.37 257.172 2010.13 253.313 2011.84 249.429C2013.54 245.536 2014.4 241.685 2014.4 237.859C2014.4 232.197 2012.89 228.173 2009.88 225.795C2006.48 223.293 2002.8 222.042 1998.87 222.042Z" fill="black" />
                </g>
            </g>
            <g className="treble-notes">
                <g className="note-8">
                    <path d="M2278 227C2278 241.359 2257.61 255 2238 255C2218.39 255 2207 245.359 2207 231C2207 216.641 2226.89 203 2246.5 203C2266.11 203 2278 212.641 2278 227Z" fill="black" />
                </g>
                <g className="sharp-8" style={style}>
                    <path d="M2161.33 245.001V212.091L2175.33 208.229V240.971L2161.33 245.001ZM2188.89 237.039L2179.27 239.796V207.054L2188.89 204.368V190.767L2179.27 193.454V160H2175.33V194.468L2161.33 198.491V165.961H2157.62V199.729L2148 202.423V216.051L2157.62 213.365V246.043L2148 248.723V262.295L2157.62 259.609V292.873H2161.33V258.419L2175.33 254.572V286.934H2179.27V253.354L2188.89 250.661V237.039Z" fill="black" />
                </g>
                <g className="flat-8" style={style}>
                    <path d="M2174.49 219.792C2174.49 224.524 2172.72 229.056 2167.85 235.138C2162.69 241.582 2158.35 245.27 2152.63 249.607V221.364C2153.93 218.081 2155.85 215.423 2158.39 213.382C2160.93 211.349 2163.5 210.329 2166.1 210.329C2170.39 210.329 2173.12 212.765 2174.29 217.62C2174.42 218.015 2174.49 218.739 2174.49 219.792ZM2173.87 200.042C2170.33 200.042 2166.72 201.022 2163.05 202.988C2159.38 204.947 2155.91 207.572 2152.63 210.839V151H2148V253.491C2148 256.388 2148.79 257.836 2150.37 257.836C2151.28 257.836 2152.42 257.071 2154.11 256.059C2158.91 253.194 2161.91 251.279 2165.16 249.26C2168.87 246.956 2173.04 244.265 2178.56 238.999C2182.37 235.172 2185.13 231.313 2186.84 227.429C2188.54 223.536 2189.4 219.685 2189.4 215.859C2189.4 210.197 2187.89 206.173 2184.88 203.795C2181.48 201.293 2177.8 200.042 2173.87 200.042Z" fill="black" />
                </g>
            </g>
            <line x1="189" y1="155" x2="189" y2="355" stroke="black" strokeWidth="4" />
            <line x1="2303" y1="154" x2="2303" y2="354" stroke="black" strokeWidth="4" />
        </svg>


    </>

}