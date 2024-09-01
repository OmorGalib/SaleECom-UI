export const RAW_SRC: string = '16w, 48w, 96w, 128w, 384w, 640w, 750w, 828w, 1080w, 1200w, 1920w, 2048w';
export const DEFAULT_LANGUAGE = 'en';
export const BD_FLAG_SVG = '<svg width="18" height="19" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
  '<path d="M0 14.98H14V0.98H0V14.98Z" fill="url(#pattern0)"/>\n' +
  '<defs>\n' +
  '<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">\n' +
  '<use xlink:href="#image0_7_1064" transform="scale(0.00625)"/>\n' +
  '</pattern>\n' +
  '<image id="image0_7_1064" width="160" height="160" xlink:href="data:image/png;base64,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"/>\n' +
  '</defs>\n' +
  '</svg>\n'


export const testSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 195" xmlns:xlink="http://www.w3.org/1999/xlink" focusable="false" style="pointer-events: none; display: inherit; width: 100%; height: 100%;">\n' +
  '  <defs>\n' +
  '    <path id="a_yt16" d="M0 194.555V.675h191.961v193.88z"></path>\n' +
  '    <path d="M.668 18.586C8.545 12.047 15.125 3.19 25.082.49v20.673H.668v-2.577z" id="c_yt16"></path>\n' +
  '  </defs>\n' +
  '  <g fill="none" fill-rule="evenodd">\n' +
  '    <path d="M63.227 57.833s-4.403 1.068-5.938 1.483c-1.456.393-4.553 1.79-4.443 6.532.112 4.74.112 4.463.223 5.85.11 1.389 1.11 3.444 3.053 3.999 1.944.555 2.834 1.777 2.444 6.386-.389 4.609 17.055-6.552 17.055-6.552l-5.41-15.82-6.984-1.878z" fill="#DDD"></path>\n' +
  '    <g transform="translate(0 -.341)">\n' +
  '      <mask id="b_yt16" fill="#fff">\n' +
  '        <use xlink:href="#a_yt16"></use>\n' +
  '      </mask>\n' +
  '      <path d="M96.24.675c-17.36 0-24.86 17.956-38.835 24.25-9.382 4.226-31.732.669-39.879 14.75C9.38 53.757 20.86 65.52 15.12 74.544 9.38 83.568-.48 85.263.02 99.774c.5 14.51 20.374 19.494 22.32 30.4 1.946 10.908-4.853 13.059 0 28.997s18.193 17.626 35.867 18.065c17.673.439 14.368 12.34 32.52 16.64 18.153 4.299 29.831-13.08 43.992-16.64 14.161-3.561 24.004.189 32.504-11.311 8.5-11.5-2.77-30.212 3.23-38.855 6-8.643 22.896-13.127 21.418-30.728-1.167-13.883-11.99-16.16-15.24-26.777-3.438-11.225 4.75-21.285-4.25-33.253-10.85-14.428-29.882-3.073-41.805-14.656C118.653 10.072 113.88.675 96.24.675" fill="#6F38D4" mask="url(#b_yt16)"></path>\n' +
  '    </g>\n' +
  '    <path d="M127.519 54.153c1.374-2.688 3.936-3.375 6.061-3.375h31.375c2.188 0 5.418 2.011 3.625 5.875-1.75 3.77-8.833 17.628-9.812 19.625-.9 1.834-2.5 3.562-6.25 3.562h-33.124c-2.5 0-4.064-2.812-2.189-6.5 1.876-3.687 10.314-19.187 10.314-19.187" fill="#282828"></path>\n' +
  '    <path fill="#FF76DA" d="M132.08 54.522h32.314L153.518 75.96h-33.224z"></path>\n' +
  '    <path d="M130.91 72.181c1.96-.157 2.745.471 5.414 0 2.67-.47 3.141-2.617 5.025-2.722 1.884-.105 4.45-.366 6.543-2.04 2.094-1.676 2.827-4.608 1.1-6.073-1.729-1.466-2.723-.262-4.397-.785-1.675-.524-.733-2.513-2.879-3.036-2.147-.524-3.664.471-5.078-.105-1.262-.514-2.104-1.039-2.532-2.898h-2.025L120.294 75.96h4.83c.918-1.467 3.824-3.622 5.785-3.779" fill="#FFD61D"></path>\n' +
  '    <path fill="#FFF771" d="M149.736 64.156l-20.166-5.068-5.573 10.135 23.96-2.388z"></path>\n' +
  '    <path fill="#FFF" d="M148.02 63.81l-18.033 1.087 17.456 2.105z"></path>\n' +
  '    <path d="M166.335 155.314c-7.65-5.535-13.913.717-21.104-6.867-7.19-7.584-.204-10.69-9.321-18.884-9.118-8.193-13.5.819-19.298-4.991-5.797-5.811-2.957-14.741-8.792-20.643-5.834-5.903-16.191.678-22.72-5.88-6.528-6.555-1.388-14.961-9.761-19.945-8.372-4.985-15.748 1.04-21.691-4.531-6.12-5.74-2.37-14.698-9.37-19.05-6.645-4.131-12.298-.594-18.355-3.744-5.782-3.007-7.52-8.195-6.902-13.63a18.305 18.305 0 00-1.495 2.185c-8.147 14.08 3.333 25.845-2.407 34.869-5.74 9.024-15.6 10.719-15.1 25.23.5 14.51 20.374 19.494 22.32 30.4 1.947 10.908-4.853 13.059 0 28.997s18.193 17.626 35.867 18.065c17.673.439 14.368 12.34 32.52 16.64 18.153 4.299 29.832-13.08 43.993-16.64 14.16-3.561 24.004.189 32.504-11.311 1.397-1.891 2.253-3.98 2.746-6.183-.978-1.607-2.172-3.03-3.634-4.087" fill="#4620AE"></path>\n' +
  '    <path d="M35.996 149.688c-2.405-27.576 22.517-52.274 55.666-55.167 38.958-3.398 61.973 17.118 64.378 44.693 2.406 27.576-22.517 52.275-55.666 55.167-33.149 2.892-61.972-17.118-64.378-44.693" fill="#BD79FF"></path>\n' +
  '    <path d="M86.795 123.632c.465 4.071-3.06 7.3-7.8 7.84-4.74.542-9.502-1.3-10.046-6.06-.465-4.072 3.729-7.22 8.468-7.762 4.74-.542 8.869 1.528 9.378 5.982M143.194 136.755c.405 3.685-2.99 6.613-7.52 7.112-4.532.498-9.062-1.16-9.537-5.47-.405-3.685 3.628-6.542 8.16-7.041 4.531-.498 8.454 1.368 8.897 5.399M132.987 159.146c.488 4.187-3.937 7.61-9.808 8.294-5.872.685-11.72-1.087-12.292-5.983-.488-4.186 4.763-7.545 10.634-8.23 5.871-.685 10.932 1.34 11.466 5.92M111.496 185.225c-5.791-4.012-1.343-13.936-7.953-16.37-6.611-2.436-13.361 5.055-18.123-2.686-3.035-4.933 2.563-10.26-3.661-15.454-6.225-5.193-13.257 3.38-18.386-.189-5.128-3.568 1.68-10.789-3.346-16.624-5.026-5.835-13.957 1.822-19.095-2.435-1.026-.849-1.173-2.245-1.072-3.56-3.1 6.776-4.528 14.168-3.864 21.781 2.406 27.575 31.229 47.585 64.378 44.693 10.788-.94 20.694-4.203 29.081-9.11-4.525 2.412-12.183 3.956-17.959-.046" fill="#9A4DFF"></path>\n' +
  '    <path d="M101.622 77.33c5.125 9.375 20.396 11.317 28.646 2.505h-5.5c-1.375 0-1.5-2.063-.75-2.688s2.688-1.312 1.938-2.875c-.75-1.562-3.063-.125-5.625.5-2.563.625-5.5.267-7.5-.937-1.557-.937-4.188-3.438-4.563-10.063-.286-5.054-6.646 13.558-6.646 13.558" fill="#EEE"></path>\n' +
  '    <path d="M67.394 83.835s-.75 8-.876 11.5c-.124 3.5-.874 9.625 5 12.25 5.876 2.625 7 3.375 8.626 4.625 1.624 1.25 3.188 2.937 3.561 5.375.376 2.438-.436 9.188 0 12 .439 2.813 1 3.75 1 3.75h20.48c3.105-6.75-2.553-6.375-4.442-5.935-1.995.466-2.766-1.002-2.078-2.94.686-1.937 3.43-10.182 1.082-14.5-1.938-3.563-5.791-6.094-5.166-7.813.55-1.511 2.727-.812 5.644-.062 2.919.75 5.544 1.562 7.482 2.75 1.937 1.187 2.603 3.372 1.978 6.874-.626 3.5-1.063 7.814-.626 10.126.439 2.313 1 3.375 1 3.375h20.084c2.292-4.833-1-6.542-4.084-5.833-2.082.479-3.602-.854-3.165-2.917.438-2.063 3-9.125 3-13.438 0-4.312-1.793-9.562-7.876-11.854-5.528-2.082-15-4.833-13.5-13.166 1.5-8.334 1.584-10.584 3.334-12.667s9.041-5.875 11.522-12.572c2.706-7.3-.522-14.428-10.19-17.844-9.665-3.417-23.901-3.907-37.25 1.916-12.415 5.417-21.415 17.584-5.915 26.5 10.587 6.09 1.374 20.5 1.374 20.5" fill="#FFF"></path>\n' +
  '    <path d="M69.02 65.847s1.286 1.658-1.579 5.381c-1.798 2.337-9.923 9.606-12.007 12.19-2.083 2.583-5.083 8-5 14 .084 6 1.417 8.25-.833 11.5s-4.276 5.325-3.222 7.121c1.055 1.795 9.805-5.205 9.805-5.205s-.925 3.417 1.08 3.25c2.004-.166 5.254-4.583 5.504-9.666.25-5.084.344-8.433 3.927-12.183 3.584-3.75 7.66-9.05 6.49-16.65-.667-4.334-.915-7.655-4.165-9.738" fill="#EEE"></path>\n' +
  '    <path d="M75.621 52.085c2.147 10.817 16.602 13.624 26.001 13.083 4.385-.251 7.945-1.781 10.578-3.436 2.662-2.165 5.731-5.073 7.175-8.97 2.704-7.298-.524-14.427-10.191-17.844-2.557-.904-5.442-1.595-8.539-2.026-13.794-1.325-27.452 6.957-25.024 19.193" fill="#DDD"></path>\n' +
  '    <path d="M105.5 38.136c-2.586-.818-5.441-1.595-8.538-2.026-6.697-.643-13.357.983-18.165 4.222-2.746 3.17-4.082 7.186-3.176 11.753 2.148 10.817 16.602 13.624 26 13.083 4.145-.238 5.92-.656 8.505-2.203 3.395-2.095 4.27-6.633 4.265-10.714-.006-4.312.166-11.25-8.89-14.115" fill="#FF76DA"></path>\n' +
  '    <path d="M97.283 57.765s.792 2.836 3.21 2.836c2.707 0 3.25-2.836 3.25-2.836" stroke="#4620AE" stroke-width="1.5" stroke-linecap="round"></path>\n' +
  '    <path d="M86.706 70.952c-2.188 0-3.75 1.902-4.062 3.589-.313 1.688 1.062 3.563 3.19 3.563 2.091 0 3.688-1.25 4.061-3.313.374-2.062-.876-3.84-3.189-3.84" fill="#FF76DA"></path>\n' +
  '    <path d="M96.41 71.51h4.452c.625 0 .988.812.76 1.719a84.627 84.627 0 00-.697 3.156c-.125.625-.657.906-1.344.906h-4.53c-.595 0-1.064-.594-.876-1.47.187-.873.515-2.78.765-3.467.25-.688.625-.844 1.47-.844" fill="red"></path>\n' +
  '    <path d="M94.943 79.511h4.453c.625 0 .99.812.761 1.72-.23.905-.19.628-.315 1.253-.125.625-.656.906-1.343.906h-4.532c-.593 0-1.062-.593-.875-1.468.188-.875.132-.88.382-1.567.25-.688.625-.844 1.47-.844" fill="#00D4B5"></path>\n' +
  '    <path d="M101.204 49.454c-.329 2.401-1.975 4.056-3.728 4.068-1.752.013-3.224-1.365-2.839-4.173.329-2.402 2.204-3.968 3.956-3.98 1.753-.012 2.971 1.458 2.611 4.085" fill="#FFF"></path>\n' +
  '    <path d="M101.204 49.454c.343-2.503-.753-3.939-2.371-4.06l-2.957 7.671a2.834 2.834 0 001.6.457c1.753-.012 3.399-1.667 3.728-4.068" fill="#4620AE"></path>\n' +
  '    <path d="M104.177 49.44c.329-2.402 1.976-4.057 3.729-4.069 1.75-.012 3.223 1.365 2.838 4.174-.33 2.401-2.203 3.967-3.956 3.98-1.753.012-2.97-1.458-2.611-4.085" fill="#FFF"></path>\n' +
  '    <path d="M110.744 49.549c.362-2.643-.92-4.018-2.532-4.161l-2.951 7.657c.426.313.943.488 1.527.484 1.753-.012 3.627-1.578 3.956-3.98M87.91 45.315c.562-3.03 2.388-5.916 5.08-5.916h15.45a24.551 24.551 0 00-2.939-1.263c-2.558-.904-5.443-1.595-8.539-2.026-6.698-.643-13.358.983-18.165 4.222-2.746 3.17-4.082 7.186-3.176 11.753.658 3.317 2.477 5.877 4.95 7.823 5.04-4.733 6.904-12.245 7.34-14.593" fill="#4620AE"></path>\n' +
  '    <path d="M83.706 129.585c.437 2.813 1 3.75 1 3.75h20.479c3.104-6.75-2.552-6.375-4.442-5.935-1.996.466-2.766-1.003-2.079-2.94a40.677 40.677 0 001.519-5.488H83.801c.059 3.017-.466 8.227-.095 10.613M109.684 111.708c-.624 3.501-1.061 7.814-.624 10.126.438 2.313 1 3.375 1 3.375h20.083c2.292-4.833-1-6.54-4.084-5.833-2.082.48-3.603-.854-3.165-2.917.197-.937.837-2.91 1.474-5.188h-14.622c-.022.148-.034.285-.061.437" fill="#EEE"></path>\n' +
  '    <path d="M85.223 132.604h19.812a1.063 1.063 0 110 2.125H85.223a1.062 1.062 0 010-2.125M110.556 124.604h19.812a1.063 1.063 0 110 2.125h-19.812a1.062 1.062 0 010-2.125M49.602 108.918c-2.25 3.25-4.276 5.326-3.222 7.121 1.054 1.796 9.804-5.204 9.804-5.204s-.924 3.416 1.08 3.25c2.005-.167 5.255-4.584 5.505-9.667.102-2.075.181-3.859.479-5.502H50.486c.242 4.898 1.167 7.04-.884 10.002M150.654 62.194c-1.233 1.457-2.734 2.486-4.527 3.286-.459.206-.51.838-.077 1.094 1.025.605 1.386 1.649 1.505 2.937a.618.618 0 001.088.349c1.381-1.58 2.95-2.694 4.694-3.44.434-.186.523-.777.14-1.053-1.006-.725-1.563-1.695-1.748-2.895-.079-.508-.742-.672-1.075-.278" fill="#FFF"></path>\n' +
  '    <path d="M152.672 63.118c-1.558.43-2.922.342-4.232-.116-.414-.144-.874.147-.844.584.105 1.497-.647 2.935-1.778 4.463-.355.479.09 1.12.667.967 1.686-.45 3.12-.401 4.36.063.39.145.816-.102.843-.516.097-1.57.66-3.047 1.633-4.482.32-.473-.1-1.115-.65-.963M130.268 79.839h-5.5c-1.375 0-1.5-2.063-.75-2.688s2.688-1.312 1.938-2.874c-.75-1.563-3.063-.125-5.625.5a11.12 11.12 0 01-5.16-.011l-5.046 9.582c6.893 2.464 17.022 1.17 20.143-4.51M57.805 89.604c2.353-3.097 1.502-7.375.834-9.547-1.391 1.37-2.575 2.58-3.204 3.36-1.532 1.9-3.556 5.336-4.488 9.406 2.04-.07 4.922-.672 6.858-3.22" fill="#FFF"></path>\n' +
  '    <path d="M91.184 111.492c-.596 2.674 3.376 5.067 9.437 4.404.168-2.171.002-4.326-.873-5.936-.444-.814-.988-1.572-1.555-2.281-3.201.24-6.453 1.326-7.008 3.813M116.437 98.588c-.598 2.677 3.384 5.072 9.455 4.402-.006-2.685-.706-5.73-2.704-8.194-3.117.278-6.21 1.371-6.75 3.791" fill="#EEE"></path>\n' +
  '    <path d="M24.872 84.989c.476 1.649-.427 3.134-1.944 3.57-1.515.437-3.227-.103-3.784-2.032-.474-1.65.655-3.131 2.17-3.568 1.515-.437 3.038.225 3.558 2.03M41.888 74.31c.947 3.286-1.01 6.286-4.222 7.212-3.213.926-6.807-.096-7.914-3.937-.947-3.284 1.487-6.288 4.699-7.214 3.213-.926 6.402.347 7.437 3.94" fill="#BD79FF"></path>\n' +
  '    <g transform="translate(65 .659)">\n' +
  '      <mask id="d_yt16" fill="#fff">\n' +
  '        <use xlink:href="#c_yt16"></use>\n' +
  '      </mask>\n' +
  '      <path d="M24.617 6.552c1.838 6.374-1.958 12.195-8.192 13.992-6.235 1.797-13.207-.185-15.356-7.638-1.837-6.374 2.885-12.202 9.12-14 6.234-1.796 12.42.674 14.428 7.646" fill="#BD79FF" mask="url(#d_yt16)"></path>\n' +
  '    </g>\n' +
  '    <g fill="#BD79FF">\n' +
  '      <path d="M164.33 92.07c2.266 2.426 2.012 5.775-.217 7.858-2.228 2.082-5.652 2.653-8.303-.183-2.266-2.426-1.621-5.97.609-8.053 2.228-2.082 5.432-2.275 7.911.378"></path>\n' +
  '      <path d="M169.264 87.026c-1.634 0-7.03 5.042-9.735 7.569-7.73 7.221-9.117 9.51-8.92 10.159 1.03 1.026 6.113-3.715 9.816-7.186l2.438-2.273c3.522-3.269 6.848-6.357 6.876-7.801a.439.439 0 00-.138-.349c-.081-.081-.194-.119-.337-.119m-18.335 19.338a1.89 1.89 0 01-1.397-.576c-.201-.2-.437-.555-.427-1.111.03-1.752 2.665-4.886 9.4-11.178 6.295-5.882 10.253-9.32 12.156-7.414.388.387.587.884.577 1.437-.038 2.082-3.108 4.93-7.355 8.872l-2.432 2.269c-4.63 4.339-8.217 7.701-10.522 7.701M113.169 17.511c.507 1.758-.456 3.34-2.071 3.806-1.616.465-3.44-.11-4.033-2.166-.506-1.759.698-3.338 2.313-3.804 1.615-.465 3.236.241 3.79 2.164M170.296 109.446c.308 1.065-.275 2.023-1.255 2.306-.978.28-2.084-.067-2.442-1.313-.308-1.065.422-2.021 1.4-2.304.979-.282 1.96.146 2.297 1.31M33.03 107.177c.306 1.065-.277 2.023-1.256 2.306-.978.281-2.083-.067-2.442-1.313-.307-1.065.422-2.022 1.4-2.304.98-.282 1.961.146 2.297 1.311"></path>\n' +
  '    </g>\n' +
  '  </g>\n' +
  '</svg>'
