export function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-10 px-6">
            <div className="max-w-6xl mx-auto text-center border-b border-gray-700 pb-6">
                <p className="text-sm">We protect your data. <span className="text-green-500 cursor-pointer">More on Security</span></p>
                <div className="flex justify-center gap-6 text-sm mt-2">
                    <span className="flex items-center gap-1">✔ SOC2 Type 2 Certified</span>
                    <span className="flex items-center gap-1">✔ HIPAA Compliant</span>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-10 grid grid-cols-2 md:grid-cols-5 gap-6 text-left">
                <div className="flex flex-col items-center md:items-start col-span-2 md:col-span-1">
                    <span className="text-white text-xl font-semibold">supabase</span>
                    <div className="flex gap-4 mt-4">
                        <span className="text-lg cursor-pointer">X</span>
                        <span className="text-lg cursor-pointer">GitHub</span>
                        <span className="text-lg cursor-pointer">Discord</span>
                        <span className="text-lg cursor-pointer">YouTube</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                        <li>Database</li>
                        <li>Auth</li>
                        <li>Functions</li>
                        <li>Realtime</li>
                        <li>Storage</li>
                        <li>Vector</li>
                        <li>Cron</li>
                        <li>Pricing</li>
                        <li>Launch Week</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li>Support</li>
                        <li>System Status</li>
                        <li>Become a Partner</li>
                        <li>Integrations</li>
                        <li>Brand Assets / Logos</li>
                        <li>Security and Compliance</li>
                        <li>DPA</li>
                        <li>SOC2</li>
                        <li>HIPAA</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Developers</h3>
                    <ul className="space-y-2">
                        <li>Documentation</li>
                        <li>Changelog</li>
                        <li>Contributing</li>
                        <li>Open Source</li>
                        <li>SupaSquad</li>
                        <li>DevTo</li>
                        <li>RSS</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Customer Stories</li>
                        <li>Careers</li>
                        <li>Company</li>
                        <li>Events & Webinars</li>
                        <li>General Availability</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Privacy Settings</li>
                        <li>Acceptable Use Policy</li>
                        <li>Support Policy</li>
                        <li>Service Level Agreement</li>
                        <li>Humans.txt</li>
                        <li>Lawyers.txt</li>
                        <li>Security.txt</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}