const projectId = 'glxjcxkjmmjbiagfvhsm';

export default function supabaseLoader(src:string) {
    return `https://${projectId}.supabase.co/storage/v1/object/public/amb_images/${src}`;
}
