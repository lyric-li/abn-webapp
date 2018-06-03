<template>
  <div class="three-start"
       ref="three"
  >
  </div>
</template>

<script>
import * as THREE from 'three'

let scene, camera, renderer
let cube, sphere

let step = 0

export default {
  name: 'three-start',
  mounted () {
    console.log('three-start')
    this.init()
  },
  methods: {
    init () {
      // 创建场景
      scene = new THREE.Scene()

      // 创建摄像机
      camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 1000)
      camera.position.x = -30
      camera.position.y = 40
      camera.position.z = 30
      camera.lookAt(scene.position)

      // 添加灯光
      const spotLight = new THREE.SpotLight(0xffffff)
      spotLight.position.set(-40, 60, -10)
      spotLight.castShadow = true
      scene.add(spotLight)

      // 添加坐标系
      const axes = new THREE.AxesHelper(20)
      scene.add(axes)

      // 添加平面
      const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1)
      // const planeMaterial = new THREE.MeshBasicMaterial({color: 0xcccccc})
      const planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc})
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.rotation.x = -0.5 * Math.PI
      plane.position.x = 15
      plane.position.y = 0
      plane.position.z = 0
      plane.receiveShadow = true
      scene.add(plane)

      // 添加立方体
      const cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
      const cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000})
      cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.x = -4
      cube.position.y = 3
      cube.position.z = 0
      cube.castShadow = true
      scene.add(cube)

      // 添加球体
      const sphereGeometry = new THREE.SphereGeometry(4, 20, 20)
      const sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff})
      sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
      sphere.position.x = 20
      sphere.position.y = 4
      sphere.position.z = 2
      sphere.castShadow = true
      scene.add(sphere)

      // 创建渲染器
      renderer = new THREE.WebGLRenderer({antialias: true})
      // renderer.setClearColorHex(0xEEEEEE)
      renderer.setSize(innerWidth, innerHeight - 50 * 2)
      renderer.shadowMap.enabled = true

      // 渲染
      this.$refs.three.appendChild(renderer.domElement)
      this.renderScene()
    },
    renderScene () {
      cube.rotation.x += 0.02
      cube.rotation.y += 0.02
      cube.rotation.z += 0.02

      step += 0.04
      sphere.position.x = 20 + (10 * (Math.cos(step)))
      sphere.position.y = 2 + (10 * (Math.abs(Math.sin(step))))

      requestAnimationFrame(this.renderScene)
      renderer.render(scene, camera)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
