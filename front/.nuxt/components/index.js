export { default as Logo } from '../../components/Logo.vue'
export { default as ProgressCircle } from '../../components/ProgressCircle.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyProgressCircle = import('../../components/ProgressCircle.vue' /* webpackChunkName: "components/progress-circle" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
