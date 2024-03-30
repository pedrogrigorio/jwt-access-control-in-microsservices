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
import { useRouter } from 'next/navigation'

export const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Invalid e-mail',
  }),
  password: z.string().min(2, {
    message: 'Invalid password',
  }),
  name: z.string().min(2, {
    message: 'Invalid name',
  }),
})

export default function EmailForm(props: { isLogged: boolean }) {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    if (props.isLogged) {
      router.push('/microservice')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center">
          {props.isLogged ? (
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">E-mail</FormLabel>

                    <FormControl>
                      <Input
                        className="bg-[#121214] w-[559px] h-[50px] text-white placeholder-gray-500"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : (
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Name</FormLabel>

                    <FormControl>
                      <Input
                        className="bg-[#121214] w-[559px] h-[50px] text-white placeholder-gray-500"
                        type="name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {props.isLogged ? (
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>

                    <FormControl>
                      <Input
                        className="bg-[#121214] w-[559px] h-[50px] text-white placeholder-gray-500"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ) : (
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">E-mail</FormLabel>

                    <FormControl>
                      <Input
                        className="bg-[#121214] w-[559px] h-[50px] text-white placeholder-gray-500"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {!props.isLogged && (
            <div className="flex flex-col justify-center items-center">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-[#121214] w-[559px] h-[50px] text-white placeholder-gray-500"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
        </div>

        <div className="mt-4 mr-6 self-end">
          <Button
            className=" bg-[#1F694B] w-[144px] h-[46px] rounded-xl"
            type="submit"
          >
            log in
          </Button>
        </div>
      </form>
    </Form>
  )
}
