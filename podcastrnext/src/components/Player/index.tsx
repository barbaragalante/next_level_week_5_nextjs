import {useContext} from 'react';
import { playerContext } from '../../contexts/playerContext';
import Image from 'next/image';
import styles from'./styles.module.scss';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export function Player(){
    const {episodeList, currentEpisodeIndex} = useContext(playerContext)
    const episode = episodeList[currentEpisodeIndex]

    return(
        <div className={styles.playerContainer}>
            <header>
                <img src="/playing.svg" alt="tocando agora"/>
                <strong>Tocando agora</strong>
            </header>

            {episode ? (
                <div className={styles.currentEpisode}>
                    <Image width={592} 
                    height={592} 
                    src={episode.thumbnail} 
                    objectFit={'cover'}
                    />

                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>

                </div>
            ) : (
            <div className={styles.emptyPlayer}>
            <strong>Selecione um Podcast para ouvir</strong>
            </div>
            )}

            <footer className={!episode ? styles.empty : ''}>
                <div className={styles.progress}>
                    <span> 00:00 </span>
                    {episode ? (
                        <Slider
                        trackStyle={{backgroundColor:'#04d361'}}
                        railStyle={{backgroundColor: '#9f75ff'}}
                        handleStyle={{borderColor:'#04d361', borderWidth: 4}}
                        />
                    ) : (
                        <div  className={styles.slider}>
                        <div className={styles.emptySlider}/>
                    </div>
                    )}
                    <span> 00:00 </span>

                </div>

                <div className={styles.buttons}>
                    <button type="button" disabled={!episode}>
                    <img src="/shuffle.svg" alt="embaralhar"/>
                    </button>

                    <button type="button" disabled={!episode}>
                    <img src="/play-previous.svg" alt="tocar anterior"/>
                    </button>

                    <button type="button" className={styles.playButton} disabled={!episode}>
                    <img src="/play.svg" alt="tocar"/>
                    </button>

                    <button type="button" className={styles.playButton} disabled={!episode}>
                    <img src="/play-next.svg" alt="tocar pr??xima"/>
                    </button>

                    <button type="button" className={styles.playButton} disabled={!episode}>
                    <img src="/repeat.svg" alt="repetir"/>
                    </button>
                </div>
            </footer>
        </div>
    );
}