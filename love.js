<svg viewBox="0 0 100 100">
    <clipPath id="myClip">
        <!--"Everithing: outside the circle will be clipped and therefore invisible.-->;
        <circle cs="40" cy="35" r="35" />
    </clipPath>

    <!--The original black heart, for reference-->
<svg>
    <clipPath id="heart"></clipPath>
    <d="M10,30 A20, 0, 0, 1, 50, 30, A20, 0, 0, 1, 90, Q10, 60, 10, 30Z"/>
    <!--Only the portion of the red heart inside the clip circle is visible.-->
    <use clip-path="url(#MyClip)" href="#heart" fill="red"/>
</svg>
