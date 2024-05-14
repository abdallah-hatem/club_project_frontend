import { Layout } from "antd"

const { Footer: AntdFooter } = Layout

const Footer = () => {
  return (
    <AntdFooter className="bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://www.alahlyegypt.com/assets/images/new-logo.png"
          alt="Al Ahly Logo"
          className="h-10 mr-2"
        />
        <span className="text-lg font-semibold">Al Ahly Club</span>
      </div>
      <p className="mb-2">Address: Al Ahly Sporting Club, Cairo, Egypt</p>
      <p className="mb-2">Phone: +20 12 345 6789</p>
      <p>Email: info@alahlyclub.com</p>
    </AntdFooter>
  )
}

export default Footer
