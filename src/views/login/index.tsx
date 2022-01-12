/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-04 16:53:57
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-11 18:24:20
 */
import "@/assets/scss/login.scss";
import { useStore } from "vuex";
import { useRoute, useRouter } from 'vue-router'
import { defineComponent, ref, reactive } from 'vue';
import useFilter from "@/utils/useFilter"
import { enumConfigLogin } from "@/config/enum";
import { ElMessage } from 'element-plus'
import { smsApi, checkApi } from '@/api'
export default defineComponent({
  name: 'Login',
  setup() {

    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const filter = useFilter();

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
      } else if (value.length < 6) {
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

    const ruleFormRef = ref();
    const sms = ref();
    const isSms = ref(true);

    const onGetSms = () => {

      if (isSms.value) {

        if (!filter.phone(loginForm.phone)) return ElMessage({ showClose: true, message: "请输入正确手机号码！", type: 'error', });

        smsApi({ mobile: loginForm.phone }).then(r => {
          onSetTime(60);

          ElMessage({ showClose: true, message: r.msg, type: 'success', });
        })
      }

    }

    const onSetTime = (i: number) => {
      --i;
      if (i === 0) {
        isSms.value = true;
        sms.value.$el.innerText = "获取短信"
      } else {
        isSms.value = false;
        sms.value.$el.innerText = `请${i}秒后再重试`
        setTimeout(() => onSetTime(i), 1000);
      }
    }

    const onSubmit = () => {
      ruleFormRef.value.validate((valid: boolean) => {
        if (valid) {
          const params = { mobile: loginForm.phone, sms: loginForm.sms };
          checkApi(params).then(r => {
            if (r.code === 0) {
              sessionStorage.setItem("login", JSON.stringify(true));
              store.dispatch("user/setUserLogin", { login: true });
              router.push({ path: redirect as string || '/' })
            }
          })
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
              <h3 class="title">{enumConfigLogin.LOGIN_NAME}</h3>
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
                maxlength="6"
                style="width: 60%;"></el-input>
              <el-button type="type"
                class="getSms"
                ref={sms}
                onClick={onGetSms}>{enumConfigLogin.SMS_NAME}</el-button>
            </el-form-item>

            <el-button
              type="primary"
              class="postForm"
              onClick={onSubmit}>{enumConfigLogin.LOGIN_NAME}</el-button>
          </el-form>
        </div>
      </>
    );
  }
})