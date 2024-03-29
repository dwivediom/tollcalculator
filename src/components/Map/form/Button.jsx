import { IconButton } from "@material-tailwind/react";
 
export function Button() {
  return (
    <div className="flex gap-4">
      <IconButton>
        <i className="fas fa-heart" />
      </IconButton>
      <IconButton variant="gradient">
        <i className="fas fa-heart" />
      </IconButton>
     
      
    </div>
  );
}