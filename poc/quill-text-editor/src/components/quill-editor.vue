<template>
  <quill-editor
    v-model="content"
    :options="editorOptions"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
    @change="onEditorChange($event)"
    :class="!this.teste ? 'hide-toolbar' : 'show-toolbar'"
  />
</template>

<script>
export default {
  data() {
    return {
      content:
        "<p>dawopdjawiojdwajdioawj dioawjdio awjido jawiodjawio jdioaw jawiodjawio jdioaw jdijaw iodjawio djiawdj ioawdawopdjawiojdwajdioawj dioawjdio jawiodjawio jdioaw jdijaw iodjawio djiawdj ioawdawopdjawiojdwajdioawj dioawjdio jawiodjawio jdioaw jdijaw iodjawio djiawdj ioawdawopdjawiojdwajdioawj dioawjdio  jdijaw iodjawio djiawdj ioawdawopdjawiojdwajdioawj dioawjdio </p>",
      teste: false,
      editorOptions: {
        placeholder: "Digite um texto aqui.",
        modules: {
          toolbar: [
            "bold",
            "italic",
            "strike",
            "underline",
            { list: "ordered" },
            { list: "bullet" },
          ],
        },
      },
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
      this.teste = false;
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
      this.teste = true;
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
  },
};
</script>

<style lang="scss">
.quill-editor {
  display: flex;
  flex-direction: column;
  width: 20%;
  .ql-toolbar {
    order: 2;
  }
  .ql-editor {
    * {
      overflow-y: auto;
      height: 95px;
    }
  }
}
.hide-toolbar .ql-toolbar {
  display: none;
}
.show-toolbar {
  .ql-toolbar {
    display: block;
  }
  .ql-editor {
    * {
      overflow-y: auto;
      height: 100%;
    }
  }
}
.ql-active .ql-stroke {
  stroke: green !important;
}
.ql-active .ql-fill {
  fill: green !important;
}
button[class*="ql-"]:hover {
  .ql-stroke {
    stroke: green !important;
  }
  .ql-fill {
    fill: green !important;
  }
}
</style>
