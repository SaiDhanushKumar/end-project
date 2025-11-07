import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboards from "./pages/Dashboards";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import ArtisanDashboard from "./pages/dashboards/ArtisanDashboard";
import CustomerDashboard from "./pages/dashboards/CustomerDashboard";
import ConsultantDashboard from "./pages/dashboards/ConsultantDashboard";
import AdminUsers from "./pages/dashboards/admin/Users";
import AdminProducts from "./pages/dashboards/admin/Products";
import AdminOrders from "./pages/dashboards/admin/Orders";
import ArtisanProducts from "./pages/dashboards/artisan/Products";
import ArtisanOrders from "./pages/dashboards/artisan/Orders";
import ArtisanMessages from "./pages/dashboards/artisan/Messages";
import CustomerOrders from "./pages/dashboards/customer/Orders";
import CustomerWishlist from "./pages/dashboards/customer/Wishlist";
import CustomerAccount from "./pages/dashboards/customer/Account";
import ConsultantReviews from "./pages/dashboards/consultant/Reviews";
import ConsultantFlagged from "./pages/dashboards/consultant/Flagged";
import ConsultantMessages from "./pages/dashboards/consultant/Messages";
import Login from "./pages/Login";
import AdminProfile from "./pages/profiles/AdminProfile";
import ArtisanProfile from "./pages/profiles/ArtisanProfile";
import CustomerProfile from "./pages/profiles/CustomerProfile";
import ConsultantProfile from "./pages/profiles/ConsultantProfile";
import Placeholder from "./pages/Placeholder";
import { AuthProvider } from "./lib/auth";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="categories" element={<Categories />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />

              <Route path="login" element={<Login />} />
              <Route path="login/:role" element={<Login />} />

              <Route path="dashboards" element={<ProtectedRoute><Dashboards /></ProtectedRoute>} />
              <Route path="dashboards/admin" element={<ProtectedRoute requiredRole="admin"><AdminDashboard /></ProtectedRoute>} />
              <Route path="dashboards/admin/users" element={<ProtectedRoute requiredRole="admin"><AdminUsers /></ProtectedRoute>} />
              <Route path="dashboards/admin/products" element={<ProtectedRoute requiredRole="admin"><AdminProducts /></ProtectedRoute>} />
              <Route path="dashboards/admin/orders" element={<ProtectedRoute requiredRole="admin"><AdminOrders /></ProtectedRoute>} />
              <Route path="dashboards/artisan" element={<ProtectedRoute requiredRole="artisan"><ArtisanDashboard /></ProtectedRoute>} />
              <Route path="dashboards/artisan/products" element={<ProtectedRoute requiredRole="artisan"><ArtisanProducts /></ProtectedRoute>} />
              <Route path="dashboards/artisan/orders" element={<ProtectedRoute requiredRole="artisan"><ArtisanOrders /></ProtectedRoute>} />
              <Route path="dashboards/artisan/messages" element={<ProtectedRoute requiredRole="artisan"><ArtisanMessages /></ProtectedRoute>} />

              <Route path="dashboards/customer" element={<ProtectedRoute requiredRole="customer"><CustomerDashboard /></ProtectedRoute>} />
              <Route path="dashboards/customer/orders" element={<ProtectedRoute requiredRole="customer"><CustomerOrders /></ProtectedRoute>} />
              <Route path="dashboards/customer/wishlist" element={<ProtectedRoute requiredRole="customer"><CustomerWishlist /></ProtectedRoute>} />
              <Route path="dashboards/customer/account" element={<ProtectedRoute requiredRole="customer"><CustomerAccount /></ProtectedRoute>} />

              <Route path="dashboards/consultant" element={<ProtectedRoute requiredRole="consultant"><ConsultantDashboard /></ProtectedRoute>} />
              <Route path="dashboards/consultant/reviews" element={<ProtectedRoute requiredRole="consultant"><ConsultantReviews /></ProtectedRoute>} />
              <Route path="dashboards/consultant/flagged" element={<ProtectedRoute requiredRole="consultant"><ConsultantFlagged /></ProtectedRoute>} />
              <Route path="dashboards/consultant/messages" element={<ProtectedRoute requiredRole="consultant"><ConsultantMessages /></ProtectedRoute>} />

              <Route path="profile/admin" element={<ProtectedRoute requiredRole="admin"><AdminProfile /></ProtectedRoute>} />
              <Route path="profile/artisan" element={<ProtectedRoute requiredRole="artisan"><ArtisanProfile /></ProtectedRoute>} />
              <Route path="profile/customer" element={<ProtectedRoute requiredRole="customer"><CustomerProfile /></ProtectedRoute>} />
              <Route path="profile/consultant" element={<ProtectedRoute requiredRole="consultant"><ConsultantProfile /></ProtectedRoute>} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </AuthProvider>
);

export default App;
