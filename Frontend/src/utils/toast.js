import toast from "react-hot-toast";

export const notifySuccess = (msg) => 
    toast.success(msg, {
        icon: "🎉"
    })
export const notifyError = (msg) => 
    toast.success(msg, {
        icon: "⚠️"
    })
export const notifyInfo = (msg) => 
    toast.success(msg, {
        icon: "ℹ️"
    })