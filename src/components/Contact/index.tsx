"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

const formSchema = z.object({

    subject: z.string().min(1, {
        message: "Campo obrigatório.",
    }),
    message: z.string().min(1, {
        message: "Campo obrigatório.",
      }),
})

export function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "",
            message: "",
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        const mailToLink = `mailto:joaon.c.jv@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(values.message)}`
        window.location.href = mailToLink;
      }

    return (
    <div className="mb-8">
        <div className="m-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Entre em</p>
            <h2 id="contact" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Contato</h2>
            </div>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-screen px-8 space-y-4 md:max-w-[600px] lg:max-w-[800px]">            
              <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
                      
                      <FormLabel>Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Escreva o assunto do email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
          )}
              />
              
              <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
                      
                      <FormLabel>Mensagem</FormLabel>
                      <FormControl>
                      <Textarea
                          placeholder="Escreva a mensagem do email" {...field}
                          className="h-44"
                      />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
          )}
        />
                    <div className="flex justify-center items-center">
                        <Button
                            type="submit"
                        
                        >Enviar</Button>
                    </div>
      </form>
    </Form>
    </div>
   
  )
}



