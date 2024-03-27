'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Invalid e-mail',
  }),
  password: z.string().min(2, {
    message: 'Invalid password',
  }),
})

export default function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col justify-center items-center"
      >
        <div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">E-mail</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#121214] w-[559px] h-[50px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Password</FormLabel>
                <FormControl>
                  <Input
                    className="bg-[#121214] w-[559px] h-[50px]"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4 mr-4 self-end">
          {/* Adicionando uma margem superior de 4 unidades e alinhando o botão ao final (canto inferior direito) */}
          <Button className="bg-[#1F694B]" type="submit">
            log in
          </Button>
        </div>
      </form>
    </Form>
  )
}
