import { Message } from 'amqp-ts';
import { Track } from '../models/Track';
import { getMongoRepository } from 'typeorm';
import InternalServerError from '@/shared/error/InternalServerError';
import ForbiddenError from '@/shared/error/ForbiddenError';

export async function updateTrack(body: any, message: Message) {
    try {
        const user = body.$_currentUser;
        let track = await getMongoRepository(Track).findOneOrFail(body.id);

        if (track.owner !== user.id) throw new ForbiddenError();

        track.title = body.title;
        
        return getMongoRepository(Track).save(track);
    }
    catch (e) {
        throw new InternalServerError(e);
    }

}
