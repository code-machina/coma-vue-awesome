<template>
  <div>
    <b-breadcrumb :items="breads"></b-breadcrumb>
  </div>
</template>

<script>

export default {
  name: "Breadcrumb",
  props: {
    items: {
      type: Array
    }
  },
  computed: {
    breads() {
      // Rename Object's key in Array
      // const obj1 = [
      //   {path: "/path", name: "path"},
      //   {path: "/path2", name: "path2"}
      // ]
      // 
      // return this.items.flatMap(el => { return  {text:el.name, href:el.path}})
      // > [
      //   {href: "/path", text: "path"},
      //   {href: "/path2", text: "path2"}
      // ]

      return this.items.flatMap(el => { return  {text:el.name, href:el.path}})
    }
  }
}
</script>

