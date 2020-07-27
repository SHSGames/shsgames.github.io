import React from "react";

export default function Component({
	  inviteId,
	  name = "Discord Server",
	  desc = "Join our community on Discord",
	  subtitle = "Official Discord Server",
	  icon = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png"
  	}) {
	return (
		<a href={`https://discord.gg/${inviteId}`} target="_blank" className="card waves-effect" style={{
			overflow: "hidden",
  			margin: "4px 4px 0",
  			width: "calc(100% - 8px)",
  			height: "122px"
		}}>
			<div className="padding-layer" style={{
			      padding: "16px 20px 12px"
			}}>
				<div className="external-img" style={{
					width: "44px",
      				height: "44px",
      				borderRadius: "50%",
      				float: "left",
      				marginBottom: "16px",
      				marginRight: "20px",
      				position: "relative"
				}}>
					<img src={icon} alt="" style={{
					  position: "absolute",
				      maxWidth: "36px",
				      top: "50%",
				      left: "50%",
				      transform: "translate(-50%,-50%)"
					}}/>
				</div>
				<div className="title" style={{
				  display: "inline-block",
			      fontFamily: "Roboto",
			      fontSize: "15px",
			      fontWeight: "500",
			      overflowX: "hidden",
			      whiteSpace: "nowrap",
			      textOverflow: "ellipsis"
				}}>{name} · Discord</div>
				<p style={{
				  display: "block",
			      fontFamily: "Roboto",
			      fontSize: "14px",
			      overflow: "hidden",
			      height: "34px",
			      textOverflow: "ellipsis",
			      margin: "8px 0",
			      padding: "0",
			      opacity: ".78",
				}}>{desc}</p>
				<div className="ref" style={{
				  display: "inline-block",
				  fontFamily: "Roboto",
				  fontSize: 13,
				  fontWeight: 500,
				  overflow: "hidden",
				  height: 34,
				  textOverflow: "ellipsis",
				  margin: "8px 0",
				  transform: "translateY(-8px)",
				  left: 0,
				  padding: 0
				}}>{subtitle}</div>
			</div>
		</a>
	)
}
