import styled from 'styled-components';

export const Canvas = styled.canvas`
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    background-image: radial-gradient(
        farthest-corner circle at 50% 105%,
        #3e6db3 0%,
        #0d1b3b 63%,
        #030314 100%
    );
    clip-path: polygon(
        100% 0%,
        0% 0%,
        0% 93.43%,
        1% 93.24%,
        2% 93.07%,
        3% 92.9%,
        4% 92.75%,
        5% 92.61%,
        6% 92.48%,
        7% 92.37%,
        8% 92.27%,
        9% 92.19%,
        10% 92.12%,
        11% 92.07%,
        12% 92.03%,
        13% 92.01%,
        14% 92%,
        15% 92.01%,
        16% 92.04%,
        17% 92.08%,
        18% 92.13%,
        19% 92.2%,
        20% 92.29%,
        21% 92.39%,
        22% 92.51%,
        23% 92.64%,
        24% 92.78%,
        25% 92.94%,
        26% 93.1%,
        27% 93.28%,
        28% 93.47%,
        29% 93.67%,
        30% 93.88%,
        31% 94.1%,
        32% 94.32%,
        33% 94.55%,
        34% 94.79%,
        35% 95.03%,
        36% 95.28%,
        37% 95.53%,
        38% 95.78%,
        39% 96.03%,
        40% 96.28%,
        41% 96.53%,
        42% 96.78%,
        43% 97.02%,
        44% 97.26%,
        45% 97.5%,
        46% 97.73%,
        47% 97.95%,
        48% 98.17%,
        49% 98.37%,
        50% 98.57%,
        51% 98.76%,
        52% 98.93%,
        53% 99.1%,
        54% 99.25%,
        55% 99.39%,
        56% 99.52%,
        57% 99.63%,
        58% 99.73%,
        59% 99.81%,
        60% 99.88%,
        61% 99.93%,
        62% 99.97%,
        63% 99.99%,
        64% 100%,
        65% 99.99%,
        66% 99.96%,
        67% 99.92%,
        68% 99.87%,
        69% 99.8%,
        70% 99.71%,
        71% 99.61%,
        72% 99.49%,
        73% 99.36%,
        74% 99.22%,
        75% 99.06%,
        76% 98.9%,
        77% 98.72%,
        78% 98.53%,
        79% 98.33%,
        80% 98.12%,
        81% 97.9%,
        82% 97.68%,
        83% 97.45%,
        84% 97.21%,
        85% 96.97%,
        86% 96.72%,
        87% 96.47%,
        88% 96.22%,
        89% 95.97%,
        90% 95.72%,
        91% 95.47%,
        92% 95.22%,
        93% 94.98%,
        94% 94.74%,
        95% 94.5%,
        96% 94.27%,
        97% 94.05%,
        98% 93.83%,
        99% 93.63%,
        100% 93.43%
    );
`;

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
`;
