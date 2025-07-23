"use client"

import { useState } from "react"
import { useFormik } from "formik"
import ReCAPTCHA from "react-google-recaptcha"
import { postNameAndComments } from "@/utils/api"
import { FormErrors, FormValues } from "@/types"

export function Comments() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null)

    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            comments: '',
        },
        validate: (values) => {
            let errors: FormErrors = {}

            if (!values.name) {
                errors.name = 'Name is required'
            } else if (values.name.length < 3) {
                errors.name = 'Enter a valid name'
            }

            if (!values.comments) {
                errors.comments = 'Comments are required'
            } else if (values.comments.length < 10) {
                errors.comments = 'Enter valid comments'
            }

            if (!captchaToken) {
                errors.captcha = "Please verify reCAPTCHA"
            }

            return errors
        },
        onSubmit: async (values, { resetForm }) => {
            try {
                await postNameAndComments(values)
                alert("Comment sent successfully")
                resetForm()
                setCaptchaToken(null)
            } catch (error) {
                alert("Something went wrong")
            }
        }
    })

    return (

        <div className="mx-auto max-w-4xl mb-20 mt-12">

            <h2 className="text-2xl sm:text-3xl font-semibold">Comments</h2>

            <form onSubmit={formik.handleSubmit} className="flex flex-col w-full text-sm md:text-xl 
            space-y-8 mt-8">


                {/* Name */}
                <div className="flex flex-col space-y-2 w-full">

                    <label className="font-semibold">Name</label>

                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border-2 border-[#6f6f6f] rounded p-1.5 px-2 focus:outline-none focus:border-white text-lg"
                        placeholder="Enter your name"
                    />
                    {
                        formik.touched.name && formik.errors.name && (
                            <span className="text-red-500 font-semibold text-sm">{formik.errors.name}</span>
                        )
                    }

                </div>


                {/* Comments */}
                <div className="flex flex-col space-y-2 w-full">

                    <label className="font-semibold">Comments</label>

                    <textarea
                        name="comments"
                        value={formik.values.comments}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="border-2 border-[#6f6f6f] rounded p-1.5 px-2 focus:outline-none focus:border-white text-lg h-28"
                        placeholder="Enter your comments here..."
                    />
                    {
                        formik.touched.comments && formik.errors.comments && (
                            <span className="text-red-500 font-semibold text-sm">{formik.errors.comments}</span>
                        )
                    }

                </div>


                {/* Google reCAPTCHA */}
                <div>
                    <ReCAPTCHA
                        sitekey="6Lf4wYwrAAAAAG_OZEx7hNaviJAmiyiAmWaXWTwi"
                        theme="dark"
                        onChange={(token) => setCaptchaToken(token)}
                        onExpired={() => setCaptchaToken(null)}
                    />
                    {
                        !captchaToken && formik.errors.captcha && (
                            <span className="text-red-500 font-semibold text-sm">
                                {formik.errors.captcha}</span>
                        )
                    }

                </div>


                {/* Submit Button */}
                <div className="w-full">

                    <button type="submit" className="border-2 border-[#6f6f6f] py-1 text-[#adadad] font-semibold cursor-pointer px-3 rounded text-sm md:text-[18px]
                    hover:bg-white hover:text-black duration-150">
                        Submit
                    </button>

                </div>

            </form>

        </div>

    )
}
