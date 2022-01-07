/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-04 16:53:57
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-07 16:40:31
 */
import "@/assets/scss/login.scss";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const redirect = route.query && route.query.redirect;

    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else if (!/^1\d{10}$/.test(value)) {
        callback(new Error('手机号格式错误'))
      } else {
        callback()
      }
    }

    const validateSms = (rule, value, callback) => {
      if (!value) {
        callback(new Error('短信验证码不能为空'))
      } else if (value.length < 4) {
        callback(new Error('请输入短信验证码'))
      } else {
        callback()
      }
    }

    const loginForm = reactive({
      phone: '',
      sms: '',
    })

    const rules = reactive({
      phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
      sms: [{ required: true, validator: validateSms, trigger: 'blur' }],
    })

    const ruleFormRef = ref()

    const onSubmit = () => {
      ruleFormRef.value.validate((valid: boolean) => {
        if (valid) {
          sessionStorage.setItem("login", JSON.stringify(true));
          store.dispatch("user/setUserLogin", { login: true });
          router.push({ path: redirect as string || '/' })
        }
      })
    }

    return () => (
      <>
        <div class="login-container">
          <el-form ref={ruleFormRef}
            model={loginForm}
            rules={rules}
            class="login-form"
            auto-complete="on"
            label-position="left">

            <div class="title-container">
              <h3 class="title">可视化大屏登录</h3>
            </div>

            <el-form-item prop="phone">
              <span class="svg-container">
                <svg-icon name="phone"
                  size={20}
                  color='#ffffff' />
              </span>
              <el-input v-model={loginForm.phone}
                placeholder="手机号码"
                name="phone"
                type="text"
                tabindex="1"
                auto-complete="on" />
            </el-form-item>

            <el-form-item prop="sms">
              <span class="svg-container">
                <svg-icon name="sms"
                  size={20}
                  color='#ffffff' />
              </span>
              <el-input v-model={loginForm.sms}
                placeholder="短信验证码"
                name="sms"
                type="text"
                tabindex="1"
                auto-complete="on"
                maxlength="4"
                style="width: 60%;"></el-input>
              <el-button type="type"
                class="getSms">获取短信</el-button>
            </el-form-item>

            <el-button
              type="primary"
              class="postForm"
              onClick={onSubmit}>登录</el-button>
          </el-form>
        </div>
      </>
    );
  }
})