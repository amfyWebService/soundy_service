import BaseError from '@/shared/error/BaseError';

export default class MusicAlreadyInPlaylistError extends BaseError {
    constructor(){
        super("music_already_in_playlist", "This track is already in the playlist");
    }
}