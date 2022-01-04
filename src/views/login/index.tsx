/*
 * @Author: 莫卓才
 * @eMail: handsome.mo@foxmail.com
 * @Descripttion: 描述
 * @version: 1.0.0
 * @Date: 2022-01-04 16:53:57
 * @LastEditors: 莫卓才
 * @LastEditTime: 2022-01-04 18:07:06
 */
import { defineComponent, ref, } from 'vue';


export default defineComponent({
  name: 'Login',
  setup() {

    const user = ref("");

    const onSubmit = () => {

      console.log(user.value)
    }


    return () => (
      <>
        <el-form inline={true} class="demo-form-inline">
          <el-form-item label="Approved by">
            <el-input v-model={user.value} placeholder="Approved by"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" onClick={onSubmit}>Query</el-button>
          </el-form-item>
        </el-form >
      </>
    );
  }
})