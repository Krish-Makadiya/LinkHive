import Navbar from "@/components/Navbar";
import "./globals.css";



export const metadata = {
    title: "LinkHive",
    description: "LinkHive is a platform designed to simplify the way you share your online presence.",
    icons: {
        icon: "/linkhive-favicon.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-[#0e0e0e] text-[#eae2dd] overflow-x-hidden">
                <Navbar/>
                {children}
            </body>
        </html>
    );
}
