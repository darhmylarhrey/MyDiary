import { date, time } from '../utils/moment';
import entries from '../model/db';
import GUID from '../utils/guid';

/**
 * @exports
 * @class DriverController
 */

class EntriesController {

  /**
   * Creates a new entry
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static create(req, res) {
    const { title, entry } = req.body;

    if (!title || !entry || title.length < 1 || entry.length < 1) {
      return res.status(404).json({ message: 'Fields cannot be empty, please in the missing field' });
    }

    const newEntry = {
      entryId: GUID,
      title,
      entry,
      date,
      time,
    };

    // adds the new entry to the database
    entries.push(newEntry);

    return res.status(201).json({
      message: 'Diary Entry was added successfully',
      newEntry,
    });
  }




  /**
   * Deletes an entry
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static deleteEntry(req, res) {
    const { entryId } = req.params;

    // check if entry exists
    const entryFound = entries.find(entry => entry.entryId === entryId);

    // If entry does not exist...
    if (!entryFound) {
      return res.status(404).json({
        message: 'Entry not found',
      });
    }

    // if entry exists...
    entries.splice(entries.indexOf(entryFound), 1);
    return res.status(204).json();
  }

  /**
   * Return entry that matches entryId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static getEntry(req, res) {
    const { entryId } = req.params;

    // find entry with params entryId
    const entryFound = entries.find(entry => entry.entryId === entryId);

    // if entry does not exist...
    if (!entryFound) {
      return res.status(404).json({
        message: 'Entry does not exist',
      });
    }

    // if  entry exists...
    return res.status(200).json({
      message: 'Entry was found',
      entryFound,
    });
  }



  /**
   * Get all diary entries
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static getAllEntries(_req, res) {
    res.status(200).json({
      message: 'Diary Entries retrieved successfully',
      entries,
    });
  }




  /**
   * Update an existing entry
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static update(req, res) {
    const { entryId } = req.params;
    const { title, entry } = req.body;

    // find entry with params entryId
    const entryFound = entries.find(entryItem => entryItem.entryId === entryId);

    // if entry does not exist...
    if (!entryFound) {
      return res.status(404).json({
        message: 'Entry cannot be found in the db',
      });
    }

    // Get index of entry
    const index = entries.indexOf(entryFound);

    if (!title || title.length < 1) {
      return res.status(404).json({ message: 'Title field cannot be empty' });
    }

    if (!entry || entry.length < 1) {
      return res.status(404).json({ message: 'Entry field cannot be empty' });
    }

    const updatedEntry = {
      entryId,
      title,
      entry,
      date,
      time,
    };

    // Replace entry with the updated entry
    entries.splice(index, 1, updatedEntry);
    return res.status(201).json({
      message: 'Diary Entry was modified successfully',
      updatedEntry,
    });
  }
}

export default EntriesController;
