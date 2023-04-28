import { useContext } from 'react';
import '../styles/ContentForGame.css'

function ContentForGame() {
    return (
        <div className="game_area_dlc_section">
            <h2 className='gradientbg'>Content For This Game
                <span className='note'>
                    <a className="browse_tag">
                        Browse all
                        <em>(1)</em>
                    </a>
                </span>
            </h2>
            <div className='game_area_dlc_list'>
            <div className='gradient_line'></div>
                <form className='add_all_dlc_to_cart'>
                    <input type="hidden" />
                    <input type="hidden" />
                    <div className='tableView'>
                        <div className='gameDlcBlocks'>
                            <a className='game_area_dlc_row odd ds_collapse_flag ds_collapse_flag_tiny app_impression_tracked'>
                                <div className='game_area_dlc_name'>Half-Life Soundtrack</div>
                                <div className='game_area_dlc_price'>Free</div>
                            </a>
                        </div>
                    </div>
                    <div className='clear_right'></div>
                </form>
            </div>
        </div>
    )
}

export default ContentForGame;