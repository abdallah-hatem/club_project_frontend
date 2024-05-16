import React, { useState, useEffect } from "react"
import { Collapse } from "antd"

import GET_FAQS from "../../apis/faqs/getFaqs"

export default function Faqs() {
  const [faqs, setFAQs] = useState([])

  const { Panel } = Collapse

  useEffect(() => {
    GET_FAQS().then((res) => setFAQs(res.result))
  }, [])
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-8 lg:px-16 xl:px-32">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <Collapse accordion>
        {faqs.map((faq) => (
          <Panel header={faq.question} key={faq.id}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  )
}
