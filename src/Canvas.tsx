import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Styles/InfraPopup.css";
import "./Styles/Interface.css";
import "./Styles/MissingParams.css";
import "./Styles/Results.css";
import "./Styles/SimulatePopup.css";
import "./Styles/StreamPopup.css";
import { changeViewReducer } from './redux/Reducer/ChangeViewRed';

type MyProps = {
  msg: string,
  view: string
}
interface MyState {
  view: string
}

class Notice extends Component<MyProps, MyState> {
  private file: React.RefObject<HTMLDivElement>;
  private prefs: React.RefObject<HTMLDivElement>;
  private display: React.RefObject<HTMLDivElement>;
  private create: React.RefObject<HTMLDivElement>;
  private actions: React.RefObject<HTMLDivElement>;
  private overview: React.RefObject<HTMLDivElement>;

  constructor(props: any){
  	super(props)
	 this.file = React.createRef();
	 this.prefs = React.createRef();
	 this.display = React.createRef();
	 this.create = React.createRef();
	 this.actions = React.createRef();
	 this.overview = React.createRef();
  }
//   state = {
// 	value: "str"
//   }

  static defaultProps = {
    msg: 'Hello everyone!'
  }
  componentDidMount(){
 	console.log(this.file.current)
  }
	  setDisplayUI(){
		    let elems = [this.display, this.create, this.actions]

	        // elems.map(function(elems){
	        // //    elems.style.display = "inline-block";
	        // });

	        // this.overview.style.display = "none"; 
	        // this.display.style.display = "inline-block"
	    }
		setResultsUI(){
		        // var elems = "display create actions".split(" ");
		        // var obj = this;
		        // elems.map(function(item){
		        //     obj[item].style.display = "none";
		        // });
		        // this.display.style.display = "inline-block"
		        // this.overview.style.display = "none"; 
		}
		checkdisp(){
			return this.props?.view === "canvas" ? "none" : "inline-block"
		}
  render() {
//   console.log(this.props?.view);

    return (
		<div id="action_bar" className="ui_container">
		<div  ref={this.file} id="file" className="action"> 
        <span id="file_trans"> File </span>
			<div id="file_drop" className="tool_drop">
				<a href="#" id="pref_text" className="action_drop sim_name_holder"> plant example 1 </a>
				<span  id="file_print" className="action_drop"> Save </span>
				<span id="file_import" className="action_drop"> <span
						id="file_import_trans">Import</span>
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25" ></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25"></polygon>
					</svg>
					<div className="second_drop">
						<span id="file_import_block" className="action_drop"> As Block </span>
						<span  id="file_import_diagram" className="action_drop"> As Full Diagram
						</span>
					</div>
				</span>

				<span id="back_to_files" className="action_drop"> Back to Files </span>
			</div>
		</div>
		<div ref={this.prefs} id="preferences" className="action"> <span id="preferences_trans">Preferences</span>
			<div id="pref_drop" className="tool_drop">
				<span className="action_drop" id="display_trans" >Display
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25" ></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25" ></polygon>
					</svg>
				</span>
				<div id="disp_drop" className="tool_drop">
					<span id="disp_values" className="action_drop"> <span
							id="disp_values_trans"> Values </span>
						<svg className="disp_triangle" width="15px" height="35px">
							<polygon points="0,15 10,20 0,25"></polygon>
						</svg>
						<svg className="disp_triangle_hover" width="15px" height="35px">
							<polygon points="0,15 10,15 5,25"></polygon>
						</svg>
						<div className="second_drop">
							<span className="action_drop box_selected" id="disp_values_accepts_cont">
								<span id="disp_values_accepts">Accepts</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
							<span className="action_drop box_selected" id="disp_values_rejects_cont">
								<span id="disp_values_rejects">Rejects</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
							<span className="action_drop box_selected" id="disp_values_dilution_cont">
								<span id="disp_values_dilution">Dilution</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
						</div>
					</span>
					<span id="disp_streams"  className="action_drop"> <span
							id="disp_streams_trans">Streams</span>
						<svg className="disp_triangle" width="15px" height="35px">
							<polygon points="0,15 10,20 0,25"></polygon>
						</svg>
						<svg className="disp_triangle_hover" width="15px" height="35px">
							<polygon points="0,15 10,15 5,25"></polygon>
						</svg>
						<div className="second_drop">
							<span className="action_drop box_selected" id="disp_streams_accepts_cont">
								<span id="disp_streams_accepts">Accepts</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
							<span className="action_drop box_selected" id="disp_streams_rejects_cont">
								<span id="disp_streams_rejects">Rejects</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
							<span className="action_drop box_selected" id="disp_streams_dilution_cont">
								<span id="disp_streams_dilution">Dilution</span>
								<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
								<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
							</span>
						</div>
					</span>
					<span id="disp_proc_name" className="action_drop box_selected">
						<span id="disp_proc_name_trans">Process name</span>
						<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
						<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
					</span>
					<span  id="disp_proc_dets" className="action_drop box_not_selected">
						<span id="disp_proc_dets_trans">Process details</span>
						<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
						<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
					</span>
					<span id="disp_stream_num" className="action_drop box_selected">
						<span id="disp_stream_num_trans">Stream Number</span>
						<img className="disp_box empty_check" src="Images/EmptyCheckmark.png" />
						<img className="disp_box filled_check" src="Images/FullCheckmark.png" />
					</span>
				</div>

				<span  id="pref_units" className="action_drop"> <span id="pref_units_trans">
						Units </span>
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25"></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25"></polygon>
					</svg>
					<div id="units_selector" className="second_drop">
						<div id="units_mass_row" className="unit_row">
							<div id="units_mass_name" className="unit_row_name"> Mass </div>
							<div id="units_mass_mass" className="units_drop_selector">
								<span className="units_drop_display"> Ton </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_mass_mass_drop" className="units_drop_list">
								</div>
							</div>
							<div className="units_row_division"> / </div>
							<div id="units_mass_time" className="units_drop_selector second_drop_selector">
								<span className="units_drop_display"> Day </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_mass_time_drop" className="units_drop_list">
								</div>
							</div>
						</div>
						<div id="units_volume_row" className="unit_row">
							<div id="units_volume_name" className="unit_row_name"> Volume </div>
							<div id="units_volume_volume" className="units_drop_selector">
								<span className="units_drop_display"> Liters </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_volume_volume_drop" className="units_drop_list">
								</div>
							</div>
							<div className="units_row_division"> / </div>
							<div id="units_volume_time" className="units_drop_selector second_drop_selector">
								<span className="units_drop_display"> Min </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_volume_time_drop" className="units_drop_list">
								</div>
							</div>
						</div>
						<div id="units_consistency_row" className="unit_row">
							<div id="units_consistency_name" className="unit_row_name"> Consistency </div>
							<div id="units_consistency_decimal" className="units_large_select">
								Decimal
							</div>
							<div className="units_row_or"> or </div>
							<div id="units_consistency_percent" className="units_large_select  units_consistency_selected">
								Percent
							</div>
						</div>
						<div id="units_head_row" className="unit_row">
							<div id="units_head_name" className="unit_row_name"> Pump Head </div>
							<div id="units_head_pressure" className="units_drop_selector">
								<span className="units_drop_display"> mH<sub>2</sub>O </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_head_pressure_drop" className="units_drop_list">
								</div>
							</div>
						</div>
						<div id="units_power_row" className="unit_row">
							<div id="units_power_name" className="unit_row_name"> Power </div>
							<div id="units_power_power" className="units_drop_selector">
								<span className="units_drop_display"> KW </span>
								<svg className="disp_triangle" width="15px" height="35px">
									<polygon points="0,15 10,20 0,25" ></polygon>
								</svg>
								<svg className="disp_triangle_hover" width="15px" height="35px">
									<polygon points="0,15 10,15 5,25" ></polygon>
								</svg>
								<div id="units_power_power_drop" className="units_drop_list">
								</div>
							</div>
						</div>
					</div>
				</span>
				<span  id="pref_language" className="action_drop"> <span
						id="pref_language_trans">Language</span>
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25" ></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25" ></polygon>
					</svg>
					<div className="second_drop">
						<span id="english" className="action_drop"> English </span>
						<span id="spanish" className="action_drop"> Español </span>
						<span id="french" className="action_drop"> Français </span>
						<span id="dutch" className="action_drop"> Nederlands </span>
						<span id="italian" className="action_drop"> Italiano </span>
						<span id="russian" className="action_drop"> русский </span>
					</div>
				</span>
			</div>
		</div>
		<div id="edit" className="action">
			<span id="edit_trans">Editor</span>
			<div id="edit_drop" className="tool_drop">
				<div className="editContainer">
					<div className="leftSide">
						<p>Times New Roman</p>
						<p>14</p>
					</div>
					<div className="rightSide">
						<div className="iconContainer">
							<img src="./Images/textIcon.png" />
						</div>
						<div className="iconContainer lineWidthIcon">
							<img src="./Images/lineWidth.png" />
						</div>
						<div className="iconContainer">
							<img src="./Images/LineColor.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style={{display: this.checkdisp()}} ref={this.create}  id="create" className="action"> <span id="create_trans">Create</span>
			<div id="create_drop" className="tool_drop">
				<span id="create_equip" className="action_drop"> Equipment type </span>
				<span id="create_stream" className="action_drop"> Stream type </span>
			</div>
		</div>
		<div style={{display: this.checkdisp()}} ref={this.actions}  id="actions" className="action"> <span id="actions_trans">Actions</span>
			<div id="actions_drop" className="tool_drop">
				<span id="actions_consolidate" className="action_drop"> Consolidate Process </span>
				<span id="actions_save" className="action_drop"> Save Process </span>
				<span id="actions_tidy" className="action_drop"> Tidy Arrows </span>
			</div>
		</div>
		<div ref={this.overview} id="overview" className="action" ><span id="overview_trans">Overview</span>
			<div id="overview_drop" className="tool_drop">
				<span id="overview_inputs" className="action_drop"> <span id="overview_inputs_trans"> Inputs </span>
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25" ></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25" ></polygon>
					</svg>
					<div className="second_drop">
						<span id="overview_inputs_feed" className="action_drop"> Feed </span>
						<span id="overview_inputs_dilution" className="action_drop"> Dilution Output </span>
						<span id="overview_inputs_water" className="action_drop"> Water Feed </span>
						<span id="overview_inputs_reject" className="action_drop"> Reject Streams </span>
					</div>
				</span>
				<span id="overview_results" className="action_drop"> <span id="overview_results_trans"> Results </span>
					<svg className="disp_triangle" width="15px" height="35px">
						<polygon points="0,15 10,20 0,25"></polygon>
					</svg>
					<svg className="disp_triangle_hover" width="15px" height="35px">
						<polygon points="0,15 10,15 5,25"></polygon>
					</svg>
					<div className="second_drop">
						<span id="overview_results_yield" className="action_drop"> Yield </span>
						<span id="overview_results_accepts" className="action_drop"> Plant Accepts </span>
						<span id="overview_results_rejects" className="action_drop"> Plant Rejects </span>
						<span id="overview_results_water" className="action_drop"> Water Consumption </span>
					</div>
				</span>
			</div>
		</div>
	</div>
	)
  }
}
function mapStateToProps(state: MyState) {
  return {
    view: state.view
  };
}

const mapDispatchToProps = {
  changeViewReducer
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Notice)
