import React from 'react'
import { createForm } from '@formily/core'
import { FormProvider, FormConsumer, Field } from '@formily/react'
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd'

const form = createForm()

export default () => {
  return (
    <FormProvider form={form}>
      <FormLayout layout="vertical">
        <Field
          name="input"
          title="Username"
          required
          initialValue="John Doe"
          decorator={[FormItem]}
          component={[Input]}
        />
      </FormLayout>
      <FormConsumer>
        {() => (
          <output>
            Value: Hello {form.values.input}
          </output>
        )}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>Log value in console</Submit>
      </FormButtonGroup>
    </FormProvider>
  )
}