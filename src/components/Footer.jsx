export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-purple-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2023 LegalSphere. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          {["Privacy Policy", "Terms of Service", "Contact Us"].map((item) => (
            <a key={item} href="#" className="text-sm hover:underline">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
