import { CSSProperties } from "react"

const style: CSSProperties = {
    display: "block",
    opacity: 0
}

export const BassClef: React.FC = () => {
    return <>
        <svg width="85%" viewBox="0 0 2500 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
                <rect width="2500" height="450" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M263.916 273.749C277.363 264.664 287.405 257.786 293.873 253.031C300.341 248.361 307.149 242.502 314.128 235.539C321.106 228.576 326.979 220.68 331.745 211.934C335.489 205.48 338.723 198.008 341.361 189.517C344 181.111 345.361 172.959 345.617 165.232C345.617 158.015 344.68 151.137 342.723 144.684C340.851 138.146 337.617 132.796 333.021 128.466C328.425 124.22 322.468 122.098 315.064 122.098C307.915 122.098 301.192 123.541 294.894 126.343C288.681 129.23 284.256 133.815 281.788 140.269C281.788 140.863 281.448 141.627 280.937 142.731C281.107 144.09 281.788 145.109 283.065 145.873C284.341 146.637 285.448 146.977 286.469 146.977C286.979 146.977 288.426 146.722 290.639 146.212C292.937 145.703 294.809 145.363 296.341 145.363C300.851 145.363 304.851 146.977 308.511 150.118C312.085 153.26 313.873 157.081 313.873 161.581C313.873 164.808 312.936 167.865 311.149 170.667C309.362 173.469 306.894 175.762 303.745 177.375C300.596 179.073 297.107 179.837 293.362 179.837C286.554 179.837 280.767 177.799 276.001 173.639C271.32 169.393 268.937 164.044 268.937 157.336C268.937 148.76 271.575 141.372 276.767 135.089C282.043 128.806 288.681 124.135 296.852 120.994C304.937 117.767 313.107 116.239 321.447 116.239C330.553 116.239 339.234 118.531 347.319 123.201C355.489 127.787 361.872 134.155 366.638 142.052C371.403 150.033 373.871 158.525 373.871 167.695C373.871 183.998 368.425 199.112 357.531 213.123C346.638 227.133 333.191 239.275 317.107 249.634C306.383 256.682 289.022 266.192 265.107 278.165L263.916 273.749ZM382.127 142.391C382.127 139.335 383.233 136.787 385.446 134.749C387.573 132.627 390.212 131.608 393.36 131.608C396.084 131.608 398.637 132.796 400.935 135.089C403.233 137.297 404.339 139.929 404.339 142.816C404.339 145.873 403.147 148.505 400.935 150.628C398.552 152.666 395.914 153.685 392.935 153.685C389.786 153.685 387.233 152.666 385.19 150.373C383.148 148.165 382.127 145.533 382.127 142.391ZM382.127 186.885C382.127 183.828 383.233 181.196 385.275 179.158C387.403 177.035 390.041 176.016 393.36 176.016C396.084 176.016 398.552 177.12 400.935 179.413C403.147 181.705 404.339 184.168 404.339 186.885C404.339 190.196 403.233 192.829 401.105 194.951C398.892 197.074 396.339 198.178 393.36 198.178C390.041 198.178 387.403 197.074 385.275 195.036C383.233 192.999 382.127 190.281 382.127 186.885Z" fill="#131516" stroke="#131516" stroke-width="0.155181" />
                <line x1="829" y1="365" x2="956" y2="365" stroke="black" stroke-width="4" />
                <line x1="1004" y1="365" x2="1131" y2="365" stroke="black" strokeWidth="4" />
                <line x1="229" y1="315" x2="2229" y2="315" stroke="black" strokeWidth="4" />
                <line x1="229" y1="265" x2="2229" y2="265" stroke="black" strokeWidth="4" />
                <line x1="229" y1="215" x2="2229" y2="215" stroke="black" strokeWidth="4" />
                <line x1="229" y1="165" x2="2229" y2="165" stroke="black" strokeWidth="4" />
                <line x1="229" y1="115" x2="2229" y2="115" stroke="black" strokeWidth="4" />
                <line x1="2054" y1="62" x2="2181" y2="62" stroke="black" strokeWidth="4" />
                <g className="bass-notes">
                    <g className="note-1">
                        <path d="M929 238C929 252.359 908.606 266 889 266C869.394 266 858 256.359 858 242C858 227.641 877.894 214 897.5 214C917.106 214 929 223.641 929 238Z" fill="black" />
                    </g>
                    <g className="flat-1" style={style}>
                        <path d="M825.489 233.792C825.489 238.524 823.715 243.056 818.849 249.138C813.692 255.582 809.352 259.27 803.633 263.607V235.364C804.933 232.081 806.851 229.423 809.393 227.382C811.928 225.349 814.495 224.329 817.096 224.329C821.391 224.329 824.115 226.765 825.292 231.62C825.424 232.015 825.489 232.739 825.489 233.792ZM824.872 214.042C821.325 214.042 817.721 215.022 814.051 216.988C810.381 218.947 806.908 221.572 803.633 224.839V165H799V267.491C799 270.388 799.79 271.836 801.37 271.836C802.283 271.836 803.418 271.071 805.114 270.059C809.915 267.194 812.907 265.279 816.158 263.26C819.866 260.956 824.041 258.265 829.563 252.999C833.373 249.172 836.13 245.313 837.841 241.429C839.545 237.536 840.4 233.685 840.4 229.859C840.4 224.197 838.895 220.173 835.883 217.795C832.476 215.293 828.797 214.042 824.872 214.042Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-2">
                        <path d="M1104 213C1104 227.359 1083.61 241 1064 241C1044.39 241 1033 231.359 1033 217C1033 202.641 1052.89 189 1072.5 189C1092.11 189 1104 198.641 1104 213Z" fill="black" />
                    </g>
                    <g className="sharp-2" style={style}>
                        <path d="M987.335 230.001V197.091L1001.33 193.229V225.971L987.335 230.001ZM1014.89 222.039L1005.27 224.796V192.054L1014.89 189.368V175.767L1005.27 178.454V145H1001.33V179.468L987.335 183.491V150.961H983.62V184.729L974 187.423V201.051L983.62 198.365V231.043L974 233.723V247.295L983.62 244.609V277.873H987.335V243.419L1001.33 239.572V271.934H1005.27V238.354L1014.89 235.661V222.039Z" fill="black" />
                    </g>
                    <g className="flat-2" style={style}>
                        <path d="M1000.49 207.792C1000.49 212.524 998.715 217.056 993.849 223.138C988.692 229.582 984.352 233.27 978.633 237.607V209.364C979.933 206.081 981.851 203.423 984.393 201.382C986.928 199.349 989.495 198.329 992.096 198.329C996.391 198.329 999.115 200.765 1000.29 205.62C1000.42 206.015 1000.49 206.739 1000.49 207.792ZM999.872 188.042C996.325 188.042 992.721 189.022 989.051 190.988C985.381 192.947 981.908 195.572 978.633 198.839V139H974V241.491C974 244.388 974.79 245.836 976.37 245.836C977.283 245.836 978.418 245.071 980.114 244.059C984.915 241.194 987.907 239.279 991.158 237.26C994.866 234.956 999.041 232.265 1004.56 226.999C1008.37 223.172 1011.13 219.313 1012.84 215.429C1014.54 211.536 1015.4 207.685 1015.4 203.859C1015.4 198.197 1013.89 194.173 1010.88 191.795C1007.48 189.293 1003.8 188.042 999.872 188.042Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-3">
                        <path d="M1279 188C1279 202.359 1258.61 216 1239 216C1219.39 216 1208 206.359 1208 192C1208 177.641 1227.89 164 1247.5 164C1267.11 164 1279 173.641 1279 188Z" fill="black" />
                    </g>
                    <g className="sharp-3" style={style}>
                        <path d="M1162.33 208.001V175.091L1176.33 171.229V203.971L1162.33 208.001ZM1189.89 200.039L1180.27 202.796V170.054L1189.89 167.368V153.767L1180.27 156.454V123H1176.33V157.468L1162.33 161.491V128.961H1158.62V162.729L1149 165.423V179.051L1158.62 176.365V209.043L1149 211.723V225.295L1158.62 222.609V255.873H1162.33V221.419L1176.33 217.572V249.934H1180.27V216.354L1189.89 213.661V200.039Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-4">
                        <path d="M1454 163C1454 177.359 1433.61 191 1414 191C1394.39 191 1383 181.359 1383 167C1383 152.641 1402.89 139 1422.5 139C1442.11 139 1454 148.641 1454 163Z" fill="black" />
                    </g>
                    <g className="flat-4" style={style}>
                        <path d="M1354.49 157.792C1354.49 162.524 1352.72 167.056 1347.85 173.138C1342.69 179.582 1338.35 183.27 1332.63 187.607V159.364C1333.93 156.081 1335.85 153.423 1338.39 151.382C1340.93 149.349 1343.5 148.329 1346.1 148.329C1350.39 148.329 1353.12 150.765 1354.29 155.62C1354.42 156.015 1354.49 156.739 1354.49 157.792ZM1353.87 138.042C1350.33 138.042 1346.72 139.022 1343.05 140.988C1339.38 142.947 1335.91 145.572 1332.63 148.839V89H1328V191.491C1328 194.388 1328.79 195.836 1330.37 195.836C1331.28 195.836 1332.42 195.071 1334.11 194.059C1338.91 191.194 1341.91 189.279 1345.16 187.26C1348.87 184.956 1353.04 182.265 1358.56 176.999C1362.37 173.172 1365.13 169.313 1366.84 165.429C1368.54 161.536 1369.4 157.685 1369.4 153.859C1369.4 148.197 1367.89 144.173 1364.88 141.795C1361.48 139.293 1357.8 138.042 1353.87 138.042Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-5">
                        <path d="M1629 138C1629 152.359 1608.61 166 1589 166C1569.39 166 1558 156.359 1558 142C1558 127.641 1577.89 114 1597.5 114C1617.11 114 1629 123.641 1629 138Z" fill="black" />
                    </g>
                    <g className="sharp-5" style={style}>

                        <path d="M1512.33 154.001V121.091L1526.33 117.229V149.971L1512.33 154.001ZM1539.89 146.039L1530.27 148.796V116.054L1539.89 113.368V99.7671L1530.27 102.454V69H1526.33V103.468L1512.33 107.491V74.9608H1508.62V108.729L1499 111.423V125.051L1508.62 122.365V155.043L1499 157.723V171.295L1508.62 168.609V201.873H1512.33V167.419L1526.33 163.572V195.934H1530.27V162.354L1539.89 159.661V146.039Z" fill="black" />
                    </g>
                    <g className="flat-5" style={style}>
                        <path d="M1525.49 132.792C1525.49 137.524 1523.72 142.056 1518.85 148.138C1513.69 154.582 1509.35 158.27 1503.63 162.607V134.364C1504.93 131.081 1506.85 128.423 1509.39 126.382C1511.93 124.349 1514.5 123.329 1517.1 123.329C1521.39 123.329 1524.12 125.765 1525.29 130.62C1525.42 131.015 1525.49 131.739 1525.49 132.792ZM1524.87 113.042C1521.33 113.042 1517.72 114.022 1514.05 115.988C1510.38 117.947 1506.91 120.572 1503.63 123.839V64H1499V166.491C1499 169.388 1499.79 170.836 1501.37 170.836C1502.28 170.836 1503.42 170.071 1505.11 169.059C1509.91 166.194 1512.91 164.279 1516.16 162.26C1519.87 159.956 1524.04 157.265 1529.56 151.999C1533.37 148.172 1536.13 144.313 1537.84 140.429C1539.54 136.536 1540.4 132.685 1540.4 128.859C1540.4 123.197 1538.89 119.173 1535.88 116.795C1532.48 114.293 1528.8 113.042 1524.87 113.042Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-6">
                        <path d="M1804 113C1804 127.359 1783.61 141 1764 141C1744.39 141 1733 131.359 1733 117C1733 102.641 1752.89 89 1772.5 89C1792.11 89 1804 98.6406 1804 113Z" fill="black" />
                    </g>
                    <g className="sharp-6" style={style}>
                        <path d="M1687.33 133.001V100.091L1701.33 96.2294V128.971L1687.33 133.001ZM1714.89 125.039L1705.27 127.796V95.054L1714.89 92.3675V78.7671L1705.27 81.4537V48H1701.33V82.4682L1687.33 86.4908V53.9608H1683.62V87.7292L1674 90.4227V104.051L1683.62 101.365V134.043L1674 136.723V150.295L1683.62 147.609V180.873H1687.33V146.419L1701.33 142.572V174.934H1705.27V141.354L1714.89 138.661V125.039Z" fill="black" />

                    </g>
                    <g className="flat-6" style={style}>
                        <path d="M1700.49 107.792C1700.49 112.524 1698.72 117.056 1693.85 123.138C1688.69 129.582 1684.35 133.27 1678.63 137.607V109.364C1679.93 106.081 1681.85 103.423 1684.39 101.382C1686.93 99.3492 1689.5 98.3287 1692.1 98.3287C1696.39 98.3287 1699.12 100.765 1700.29 105.62C1700.42 106.015 1700.49 106.739 1700.49 107.792ZM1699.87 88.0424C1696.33 88.0424 1692.72 89.0217 1689.05 90.9884C1685.38 92.9469 1681.91 95.5721 1678.63 98.839V39H1674V141.491C1674 144.388 1674.79 145.836 1676.37 145.836C1677.28 145.836 1678.42 145.071 1680.11 144.059C1684.91 141.194 1687.91 139.279 1691.16 137.26C1694.87 134.956 1699.04 132.265 1704.56 126.999C1708.37 123.172 1711.13 119.313 1712.84 115.429C1714.54 111.536 1715.4 107.685 1715.4 103.859C1715.4 98.197 1713.89 94.1733 1710.88 91.7951C1707.48 89.2934 1703.8 88.0424 1699.87 88.0424Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-7">
                        <path d="M1979 88C1979 102.359 1958.61 116 1939 116C1919.39 116 1908 106.359 1908 92C1908 77.6406 1927.89 64 1947.5 64C1967.11 64 1979 73.6406 1979 88Z" fill="black" />
                    </g>
                    <g className="sharp-7" style={style}>
                        <path d="M1862.33 103.001V70.0912L1876.33 66.2294V98.9712L1862.33 103.001ZM1889.89 95.0393L1880.27 97.7959V65.054L1889.89 62.3675V48.7671L1880.27 51.4537V18H1876.33V52.4682L1862.33 56.4908V23.9608H1858.62V57.7292L1849 60.4227V74.0511L1858.62 71.3646V104.043L1849 106.723V120.295L1858.62 117.609V150.873H1862.33V116.419L1876.33 112.572V144.934H1880.27V111.354L1889.89 108.661V95.0393Z" fill="black" />
                    </g>
                </g>
                <g className="bass-notes">
                    <g className="note-8">
                        <path d="M2154 63C2154 77.3594 2133.61 91 2114 91C2094.39 91 2083 81.3594 2083 67C2083 52.6406 2102.89 39 2122.5 39C2142.11 39 2154 48.6406 2154 63Z" fill="black" />
                    </g>
                    <g className="flat-8" style={style}>
                        <path d="M2050.49 56.7924C2050.49 61.5241 2048.72 66.056 2043.85 72.1385C2038.69 78.5823 2034.35 82.2704 2028.63 86.6072V58.3639C2029.93 55.0805 2031.85 52.4225 2034.39 50.3817C2036.93 48.3492 2039.5 47.3287 2042.1 47.3287C2046.39 47.3287 2049.12 49.7647 2050.29 54.6198C2050.42 55.0148 2050.49 55.739 2050.49 56.7924ZM2049.87 37.0424C2046.33 37.0424 2042.72 38.0217 2039.05 39.9884C2035.38 41.9469 2031.91 44.5721 2028.63 47.839V-12H2024V90.4914C2024 93.388 2024.79 94.8362 2026.37 94.8362C2027.28 94.8362 2028.42 94.0709 2030.11 93.0587C2034.91 90.1938 2037.91 88.2793 2041.16 86.2596C2044.87 83.9558 2049.04 81.2655 2054.56 75.9989C2058.37 72.1724 2061.13 68.3129 2062.84 64.4288C2064.54 60.5364 2065.4 56.6852 2065.4 52.8586C2065.4 47.197 2063.89 43.1733 2060.88 40.7951C2057.48 38.2934 2053.8 37.0424 2049.87 37.0424Z" fill="black" />
                    </g>
                </g>
                <line x1="231" y1="117" x2="231" y2="317" stroke="black" strokeWidth="4" />
            </g>
            <defs>
                <clipPath id="clip0">
                    <rect width="2500" height="450" fill="white" />
                </clipPath>
            </defs>
        </svg>

    </>

}