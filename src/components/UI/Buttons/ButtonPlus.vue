<template>
  <div class="btn">
    <button class="button2">
      <svg
        viewBox="0 -960 960 960"
        xmlns="http://www.w3.org/2000/svg"
        class="svg2"
      >
        <path
          d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  background-color: #171717;
  border-radius: 8px;
  padding: 0;
  box-sizing: border-box;
}

.button2 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: none;
  outline: none;
  background-color: #c7c3c0;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 5px, #ffffff 1px 1px 2px 0px inset,
    #c7c3c0 -1.5px -1.5px 4px 0px inset;
  cursor: pointer;
  transition: 0.1s ease-in-out;
}

.svg2 {
  fill: #5f5f5f;
  width: 15px;
  height: 15px;
  transition: 0.1s ease-in-out;
}

.button2:active {
  box-shadow: inset 0.5px 0.5px 3px #000000, #c7c3c0 -1.5px -1.5px 4px 0px inset;
}

.button2:active .svg2 {
  scale: 0.95;
}
</style>
