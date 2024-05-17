import { Layout } from "antd"

const { Footer: AntdFooter } = Layout

const Footer = () => {
  return (
    <AntdFooter className="bg-gray-800 text-white text-center py-4 mt-10">
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://seeklogo.com/images/N/new-radiant-sc-logo-1C47B40595-seeklogo.com.png"
          alt="Al Ahly Logo"
          className="h-10 mr-2"
        />
        <span className="text-lg font-semibold">Sport hub</span>
      </div>
      <p className="mb-2">Address: Sport hub, Cairo, Egypt</p>
      <p className="mb-2">Phone: +20 12 345 6789</p>
      <p>Email: info@Sport hub.com</p>
    </AntdFooter>
  )
}

export default Footer
